class QueueMessagesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        queues = MessageQueue.includes(:messages).all
        result = queues.map do |queue|
          {
            name: queue.name,
            message_count: queue.messages.size
          }
        end
    
        render json: result
    end
    def create
        queue_name = params[:queue_name]

        queue = MessageQueue.find_or_create_by(name: queue_name)
        queue_message = params[:queue_message].to_json
        message = queue.messages.create(content: queue_message)
    
        if message.persisted?
          render json: { status: 'Message added to queue' }, status: :created
        else
          render json: { error: 'Failed to add message' }, status: :unprocessable_entity
        end
    end
    def show
        queue_name = params[:queue_name]
        timeout_ms = (params[:timeout] || 10_000).to_i
    
        queue = MessageQueue.find_by(name: queue_name)
        if queue.nil? || queue.messages.empty?
          sleep(timeout_ms / 1000.0) if timeout_ms.positive?
          return head :no_content
        end
    
        message = queue.messages.first
        content = JSON.parse(message.content)
        render json: content
        message.destroy
    end
    
end
