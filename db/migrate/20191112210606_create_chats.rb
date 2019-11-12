class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.integer :room_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :chats, :user_id
  end
end
