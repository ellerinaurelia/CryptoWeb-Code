class CreateTransactions < ActiveRecord::Migration[8.1]
  def change
    create_table :transactions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :coin_symbol
      t.string :tx_type
      t.decimal :price
      t.decimal :total_price

      t.timestamps
    end
  end
end
