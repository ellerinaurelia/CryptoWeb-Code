class AuthController < ApplicationController

  def signup
    user = User.new(username: params[:username], email: params[:email], password: params[:password], balance: 10000.0)
    if user.save
      render json: { message: "Akun berhasil dibuat!", user: user }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: { message: "Login sukses!", user: user }, status: :ok
    else
      render json: { error: "Email atau Password salah boiii!" }, status: :unauthorized
    end
  end
end