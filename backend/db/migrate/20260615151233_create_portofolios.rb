class CreatePortofolios < ActiveRecord::Migration[8.1]
  def change
    create_table :portofolios do |t|
      t.references :user, null: false, foreign_key: true
      t.string :coin_symbol
      t.decimal :amount

      t.timestamps
    end
  end
end
