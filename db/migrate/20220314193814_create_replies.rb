class CreateReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :replies do |t|
      t.string :message
      t.belongs_to :forum, null: false, foreign_key: true
      t.integer :likes
      t.integer :dislike

      t.timestamps
    end
  end
end
