class MessageQueue < ApplicationRecord
    has_many :messages, dependent: :destroy
end
