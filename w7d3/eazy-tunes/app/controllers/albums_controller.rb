class AlbumsController < ApplicationController
    def new
        @album = Album.new(album_params)
    end


    private
    def album_params
        params.require(:album).permit(:title, :year, :live, :band_id)
    end
end
