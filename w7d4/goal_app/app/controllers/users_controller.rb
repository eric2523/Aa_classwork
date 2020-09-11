class UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show 
        @user = User.find_by(id: params[:id])
        # debugger
        if @user 
            render :show 
        else
            redirect_to users_url
        end
    end

    def new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save 
            redirect_to user_url(@user.id)
        else
            redirect_to new_user_url 
        end
    end

    def edit 
        @user = User.find_by(id: params[:id])
        if @user
            render :edit
        else
            redirect_to users_url
        end
    end 

    def update 
        @user = User.find_by(id: params[:id])
        if @user
            @user.username = user_params[:username]
            @user.password = user_params[:password]
            @user.save!
            redirect_to user_url(@user)
        else
            redirect_to users_url
        end
    end

    def destroy

    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
