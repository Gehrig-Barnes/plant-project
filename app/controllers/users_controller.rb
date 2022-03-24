class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index 
        user = current_user
        render json: user, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end

    def followings
        user = User.find(params[:id])
        render json: user.followings, status: :ok
    end

    def edit_about
        user = User.find(params[:id])
        user.update!(about_params)
        render json: user, status: :ok 
    end

    def user_follow
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def all_users
        users = User.all
        render json: users, status: :ok
    end



    private

    def user_params
        params.permit(:username, :password, :age, :gender, :email, :about, :image)
    end

    def about_params
        params.permit(:about)
    end
end
