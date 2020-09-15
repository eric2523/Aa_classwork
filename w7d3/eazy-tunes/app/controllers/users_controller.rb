class UsersController < ApplicationController
    before_action :require_log_in, only: [:show]
    
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            redirect_to user_url(@user)
        else
            flash.now[:errors] = ["Username or Password can't be blank"]
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
