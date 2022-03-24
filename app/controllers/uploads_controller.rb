class UploadsController < ApplicationController

    def index
        plants = Upload.all
        render json: plants, status: :ok
    end

    def create
        new_plant = Upload.create!(plant_params)
        render json: new_plant, status: :created
    end

    def destroy
        plant = Upload.find(params[:id])
        plant.destroy
        head :no_content
    end

    def update
        update_post = Upload.find(params[:id])
        update_post.update!(update_params)
        render json: update_post, status: :ok
    end

    def show
        upload = Upload.find(params[:id])
        render json: upload, status: :ok
    end

    private

    def plant_params
        params.permit(:image, :description, :likes, :user_id)
    end

    def update_params
        params.permit(:description, :likes)
    end
end
