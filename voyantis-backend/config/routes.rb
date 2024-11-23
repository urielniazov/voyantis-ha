Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  scope '/api', defaults: { format: :json } do
    # QueueMessages routes
    resources :queue_messages, only: [:index]

    # Create and retrieve messages in specific queues
    post '/:queue_name', to: 'queue_messages#create', as: :create_queue_message
    get '/:queue_name', to: 'queue_messages#show', as: :get_queue_message
  end
  # Root path route
  # root "posts#index"
end
