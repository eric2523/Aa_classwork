require_relative 'p04_linked_list'

class HashMap
  attr_accessor :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end
  
  def include?(key)
    node = @store[key.hash % num_buckets]
    return node.include?(key)
  end

  def set(key, val)
    # unless @store[key.hash % num_buckets].include?(key)
    if self.include?(key)
      @store[key.hash % num_buckets].update(key,val)
    else
      @store[key.hash % num_buckets].append(key,val)
      @count += 1
    end
  end

  def get(key)
      @store[key.hash % num_buckets].get(key)
  end

  def delete(key)
    @store[key.hash % num_buckets].remove(key)
    @count -= 1
  end

  def each

  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    # flatten_store = @store.flatten
    @store = Array.new(@store.length * 2) {LinkedList.new}
    count = 0
    flatten_store.each do |ele|
      LinkedList.new(ele.key, ele.val)
    end
  end

  #[ LL , LL , LL , LL , LL  ]

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
  end
end
