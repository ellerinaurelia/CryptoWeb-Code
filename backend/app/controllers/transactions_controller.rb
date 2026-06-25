class TransactionsController < ApplicationController
  def trade
    user = User.find_by(id: params[:user_id])
    return render json: { error: "User not found!" }, status: :not_found unless user

    action = params[:action_type]
    coin = params[:coin]
    amount = params[:amount].to_f
    price = params[:price].to_f
    total_cost = amount * price

    if action == "buy"
      if user.balance >= total_cost
        user.update(balance: user.balance - total_cost)
        asset = user.assets.find_or_create_by(coin: coin)
        asset.update(amount: (asset.amount || 0) + amount)
        Transaction.create(user: user, action: "buy", coin: coin, amount: amount, price: price)
        render json: { message: "Berhasil beli #{amount} #{coin}!" }, status: :ok
      else
        render json: { error: "Saldo USD kaga cukup boiii!" }, status: :unprocessable_entity
      end
    end
  end
end