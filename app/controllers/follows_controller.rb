class FollowsController < ApplicationController
    skip_before_action :authorize
    def index
        render json: Follow.all, status: :ok
    end

    def create
        new_follow = Follow.create!(follow_params)
        render json: new_follow, status: :created
    end
    private
    def follow_params
        params.permit(:follower_id, :followed_user_id)
    end
end