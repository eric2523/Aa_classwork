class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false 
      t.integer :year, null: false 
      t.references :band, null: false, unique: true 
      t.boolean :live, null: false, default: false 

      t.timestamps
    end
  end
end
