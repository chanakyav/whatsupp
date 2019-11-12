class Message < ApplicationRecord
    belongs_to :user
    belongs_to :room, inverse_of: :messages
end
