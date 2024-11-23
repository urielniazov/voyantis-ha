class CreateMessageQueues < ActiveRecord::Migration[8.0]
  def change
    create_table :message_queues do |t|
      t.string :name

      t.timestamps
    end
  end
end
