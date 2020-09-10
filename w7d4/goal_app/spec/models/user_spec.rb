require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { FactoryBot.create(:user) }
  
  it {should validate_presence_of(:username)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_presence_of(:session_token)}
  it {should validate_uniqueness_of(:username) }
  it {should validate_uniqueness_of(:session_token)}
  it {should validate_length_of(:password).is_at_least(6)}

  describe "#password=()" do
    it "should set user's password_digest" do
      expect(user.password_digest).to_not be_nil 
    end
    
    it "should set password instance variable to user's password" do 
        user1 = FactoryBot.build(:user)
        expect(user1.password).to eq("password123")
    end
      
    it "should use BCrypt to create password_digest" do 
        expect(BCrypt::Password).to receive(:create).with("password123")
        FactoryBot.build(:user)
    end

    it "should not save user's password into the database" do
      user1 = User.find_by(username: user.username)
      expect(user1.password).to_not eq("password123")
    end
  end

  describe "#ensure_session_token" do
    it "should give user session token if user doesn't already have one" do
      expect(user.session_token).to_not be_nil 
    end
    
    it "should not give user session token if user does have one" do
      old_sess_token = user.session_token
      expect(user.ensure_session_token).to eq(old_sess_token)
    end
  end

  describe "#reset_session_token!" do 
    it "should reset user's session token" do
      old_sess_token = user.session_token
      expect(user.reset_session_token!).to_not eq(old_sess_token)
    end
  end

  describe "#is_password?" do
    it "should return true if password is correct" do 
      expect(user.is_password?("password123")).to eq(true)
    end

    it "should return false if password is not correct" do 
      expect(user.is_password?("passssssss")).to eq(false)
    end
    
    # it "should utilize BCrypt" do
    #   # allow(BCrypt::Password).to receive_message_chain(:new, :is_password?).with(user.password_digest, "password123")
    #   expect(BCrypt::Password.new(user.password_digest).is_password?("password123")).to eq(true)
    # end
  end

  describe ":find_by_credentials" do 
    it "should return the user if username and password are correct" do 
      user1 = User.find_by(username: user.username)
      expect(User.find_by_credentials(user.username,"password123")).to eq(user1)
    end

    it "should return nil if username and passward are not correct" do
      user1 = User.find_by(username: user.username)
      expect(User.find_by_credentials(user.username,"passssword")).to be_nil
    end
  end


end

