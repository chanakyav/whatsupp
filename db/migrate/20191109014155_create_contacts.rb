class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.integer :user_id, null: false
      t.integer :contact_id, null: false
      t.timestamps
    end
    add_index :contacts, [:user_id, :contact_id], unique: true
  end
end
