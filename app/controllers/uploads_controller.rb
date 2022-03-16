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

    private

    def plant_params
        params.permit(:image, :description, :likes, :user_id)
    end
end
