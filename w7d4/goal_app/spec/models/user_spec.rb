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
      expect(user).password_digest.to_not_be_nil 
    end
    it "should set password instance variable to user's password"
    it "should use BCrypt to create password_digest"
    it "should not save user's password into the database"
  end
end

