class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max,false)
  end

  def insert(num)
    if is_valid?(num)
      @store[num] = true
    else
      raise "Out of bounds"
    end
  end

  def remove(num)
    if is_valid?(num)
      @store[num] = false
    else
      raise "Out of bounds"
    end
  end

  def include?(num)
    store[num]
  end

  private

  def is_valid?(num)
    num.between?(0,@store.length)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num % num_buckets] << num
  end

  def remove(num)
    self[num % num_buckets].delete(num)
  end

  def include?(num)
    self[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)

    resize! if @count >= @store.length
    unless self.include?(num)
      self[num % num_buckets] << num
      @count += 1
    end
  end

  def remove(num)
    if self.include?(num)
      self[num % num_buckets].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(@store.length * 2) {Array.new}

    (@store.length).times do |i|
      @store[i].each do |ele|
        new_store[ele % new_store.length] << ele
      end
    end

    @store = new_store
  end
end
