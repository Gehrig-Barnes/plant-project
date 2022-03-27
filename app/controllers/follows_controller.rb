class FollowsController < ApplicationController
    skip_before_action :authorize
    def index
        render json: Follow.all.pluck(:id), status: :ok
    end

    def create
        new_follow = Follow.create!(follow_params)
        render json: new_follow, status: :created
    end

    

    def delete_follow
        follow = Follow.find_by(follow_params)
        follow.destroy
        render json: "deleted", status: :no_content
    end

    def user_followings
        user_followings = User.find(session[:user_id]).followings.pluck(:id)
        render json: user_followings, status: :ok
    end
    
    private

    def follow_params
        params.permit(:follower_id, :followed_user_id)
    end

end