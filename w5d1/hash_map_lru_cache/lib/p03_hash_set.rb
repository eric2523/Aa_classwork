class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count >= num_buckets

    unless self.include?(key)
      self[key] << key 
      @count += 1
      true
    end
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    if self.include?(key)
      self[key].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    flatten_store = @store.flatten
    @store = Array.new(@store.length * 2) {Array.new}
    count = 0
    flatten_store.each do |ele|
      self.insert(ele)
    end
  end
end
