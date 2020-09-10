class User < ApplicationRecord
    validates :password_digest, presence:true
    validates :username, uniqueness: true,  presence: true 
    validates :session_token, uniqueness:true , presence: true 
    validates :password, length: { minimum:6, allow_nil: true}
    attr_reader :password 

    after_initialize :ensure_sesession_token

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def ensure_sesession_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_sessession_token!
        self.session_token = SecureRandom::urlsafe_base64 
        self.save!
        self.session_token
    end
end
