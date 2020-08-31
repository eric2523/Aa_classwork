class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true 
    end

    create_table :polls do |t|
      t.string :title, null: false
      t.integer :author_id, null: false 
    end

    create_table :questions do |t|
      t.string :body, null: false 
      t.integer :poll_id, null: false 
    end

    create_table :answer_choices do |t|
      t.string :text, null: false 
      t.integer :question_id, null: false 
    end

    create_table :responses do |t|
      t.integer :answer_choice_id, null: false 
      t.integer :user_id, null: false 
    end

    add_index :polls, :author_id 
    add_index :answer_choices, :question_id
    add_index :responses, :user_id
  end
end
