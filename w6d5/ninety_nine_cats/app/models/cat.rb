class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper 

    COLORS = ['Orange', 'White', 'Black', 'Gray']

    validates :birth_date, presence: true 
    validates :color, presence: true, inclusion: {in: COLORS}
    validates :sex, presence: true, length: { maximum: 1 }, inclusion: {in: ["M", "F"]}
    validates :description, presence: true 
    
    def age
        Time.now.year - self.birth_date.year
    end
end
