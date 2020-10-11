# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true 

  def self.in_bounds(bounds)
    # debugger
    latBound = [bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f]
    # debugger
    lngBound = [bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f]
    self
      .where(lat: latBound[0]..latBound[1])
      .where(lng: lngBound[0]..lngBound[1])
  end
end
