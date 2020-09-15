class BandsController < ApplicationController
    before_action :require_log_in, only: [:show, :create, :new, :destroy]
    
    def index
        @bands = Band.all
    end

    def show
        @band = Band.find(params[:id])
    end

    def new
        @band = Band.new
    end

    def edit
        @band = Band.find(params[:id])
    end

    def destroy
        @band = Band.find(params[:id])
        @band.destroy
        redirect_to bands_url
    end

    def update
        @band = Band.find_by(id: params[:id])

        if @band 
            @band.update(band_params)
            redirect_to band_url(@band)
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            flash[:errors] = ["Created band successfully!"]
            redirect_to band_url(@band)
        else
            flash.now[:errors] = @band.errors.full_messages 
            render :new
        end

    end

    private
    def band_params
        params.require(:band).permit(:name)
    end
end
