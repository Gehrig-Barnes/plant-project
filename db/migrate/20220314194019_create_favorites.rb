class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :upload, null: false, foreign_key: true
      t.boolean :favorite

      t.timestamps
    end
  end
end
