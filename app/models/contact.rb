class Contact < ApplicationRecord

    validates :user_id, :contact_id, presence: true
    validates :user_id, uniqueness: {scope: :contact_id}

    belongs_to :user,
        class_name: :User,
        foreign_key: :contact_id,
        primary_key: :id
end
