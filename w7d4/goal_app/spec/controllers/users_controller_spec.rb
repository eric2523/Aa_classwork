require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    let(:user_params) {
        user: {
            username: "haseebthedream",
            password: "password123"
        }
    }

    describe "GET #index" do
        it "should render index view template" do 
            get :index 
            expect(response).to render_template("index")
        end
    end

    describe "GET #show" do 
        it "should render show view template" do 
            get :show
            expect(response).to render_template("show")
        end

        it "should render the correct user's show page" do 
            user = FactoryBot.create(:user)
            get :show
            expect(response).to redirect_to(user_url(user))
        end
    end

    describe "GET #new" do
    end

    describe "POST #create" do
    end

    describe "GET #edit" do 
    end

    describe "PATCH #update" do
    end

    describe "DELETE #destroy" do
    end

end
