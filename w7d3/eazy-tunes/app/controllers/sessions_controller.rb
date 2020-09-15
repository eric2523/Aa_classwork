class SessionsController < ApplicationController
    before_action :require_log_in, only: [:destroy]
    
    def new
        @user = User.new
        render :new 
    end

    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            log_in!(@user)
            redirect_to bands_url
        else
            flash[:errors] = @user.errors.full_messages
            redirect_to new_session_url
        end
    end

    def destroy
        if self.logged_in?
            self.logout!
            redirect_to new_session_url
        end
    end
end
