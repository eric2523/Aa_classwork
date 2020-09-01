class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |name|
      define_method(name) do 
        instance_variable_get("@#{name}")
      end

      #whats inside the pipes is the argument to the function
      define_method("#{name}=") do |value|
        instance_variable_set("@#{name}", value)
      end
    end
  end

end
