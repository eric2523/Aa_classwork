class Api::SessionsController < ApplicationController
    def new
      render :new
    end  

    def create
      @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
        )
      if @user 
        login!(@user) 
        redirect_to api_user_url(@user)
      else
        render json: ['Invalid Credentials'], status: 401
      end
    end

    def destroy
      unless current_user
        render json: user.errors.full_messages, status: 404
      else
        logout!
        render json: {}
      end
    end

end
