class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render :index 
    end

    private
    def cat_params
        params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
    end
end
