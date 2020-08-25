class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    values = self.map.with_index do |ele, i| 
        (ele * i).hash 
    end
    if self.empty?
      return 145
    else
      values.sum
    end
  end
end

class String
  def hash
    alpha = ("a".."z").to_a
    values = []
      self.each_char.with_index do |ele, i| 
       values << (alpha.find_index(ele.downcase) * i).hash
      
    end
    if self.empty?
      return 1
    else
      values.sum
    end
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    alpha = ("a".."z").to_a
    values = []

    self.each do |k, v|
      key_hash = k.to_s.hash
      values << (key_hash + v.hash)
    end
    
    if self.empty?
      return 1
    else
      values.sum
    end

  end
end


# {   a: "a", 
#     b: "b"
# }