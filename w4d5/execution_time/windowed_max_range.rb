def windowed_max_range(array, window_size)
    current_max_range = false
    
    i = 0
    while i <= array.length - window_size #O(N)
        current_arr = array[i..(i + window_size - 1)] 
        range = current_arr.max - current_arr.min   #O(2 * window size) 
        current_max_range = range if !current_max_range || (range > current_max_range) #O(1)

        i += 1
    end
    current_max_range
end

class MyQueue
  def initialize
    @store = []
  end

  def peek
      @store.first
  end

  def enqueue(el)
      @store.push(el)
  end

  def dequeue(el)
      @store.shift
  end

  def size
      @store.length
  end

  def empty?
      @store.empty?
  end
end

class MyStack
  def initialize
    @store = []
  end

  def peek
      @store.first
  end

  def empty?
      @store.empty?
  end

  def size
      @store.length
  end

  def push(el)
      @store.push(el)
  end

  def pop
      @store.pop
  end
end

class StackQueue
    def initialize
        queue = MyQueue.new
    end

    def size
        @stack.size
    end

end
