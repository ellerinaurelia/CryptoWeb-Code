class PortfoliosController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    if user
      render json: { total_balance: user.balance, assets: user.assets.map { |a| { coin: a.coin, amount: a.amount } } }, status: :ok
    else
      render json: { error: "User kaga ketemu!" }, status: :not_found
    end
  end
end