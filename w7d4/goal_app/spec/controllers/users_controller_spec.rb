require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    let(:user_params) do 
        {
            user: {
                username: "haseebthedream",
                password: "password123"
            }
        }
    end

    describe "GET #index" do
        it "should render index view template" do 
            get :index 
            expect(response).to render_template("index")
        end
    end

    describe "GET #show" do 
        user = FactoryBot.create(:user)

        it "should render the correct user's show page" do 
            get :show, params: {id: user.id}
            expect(response).to render_template("show")
        end

        it "should redirect to index if user does not exist" do
            # user = FactoryBot.create(:user)
            get :show, params: {id: -1}
            expect(response).to redirect_to(users_url)
        end
    end

    describe "GET #new" do
        it "should render new template" do 
            get :new 
            expect(response).to render_template(:new)
        end
    end

    describe "POST #create" do
        let(:user_params2) do 
            {
                user: {
                    username: "haseebthedream",
                    password: "password123"
                }
            }
        end

        it "should save a new user to the database" do
            post :create, params: user_params2
            expect(User.find_by(username: "haseebthedream")).to_not be_nil
        end

        context "when there are valid params" do
            it "should redirect to users show page" do
                post :create, params: user_params2
                user = User.find_by(username: "haseebthedream")
                expect(response).to redirect_to(user_url(user))
            end
        end

        context "when there invalid params" do
            let(:user_params3) do 
                {
                    user: {
                        username: "haseebthedream",
                        password: ""
                    }
                }
            end
            it "should redirect to new page" do
                post :create, params: user_params3
                expect(response).to redirect_to new_user_url
            end
        end
    end

    describe "GET #edit" do 
        user = FactoryBot.create(:user)

        it "should render edit page if user exist" do 
            get :edit, params: {id: user.id}
            expect(response).to render_template(:edit)
        end

        it "should redirect to index page if user does not exist" do
            get :edit, params: {id: -1}
            expect(response).to redirect_to users_url 
        end
    end

    describe "PATCH #update" do
        it "should update the user's credentials"
        it "should redirect to the user's updated show page"
    end

    describe "DELETE #destroy" do
    end

end
