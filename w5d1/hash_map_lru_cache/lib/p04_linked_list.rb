
class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # removes current node
    @prev.next = @next
    @next.prev = @prev
  end
end

class LinkedList
  include Enumerable

  attr_reader :head, :tail
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    return nil if self.empty?
    @head.next
  end

  def last
    return nil if self.empty?
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    self.each do |node|
      return node.val if node.key == key
    end
    nil
  end

  def include?(key)
    self.each do |node|
      return true if node.key == key
    end
    false 
  end

  def append(key, val)

    #if empty then current node, set to prev == head, next == tail
    #if not, take tail prev and set that to current node prev, current node next to tail

    # head -- node1 -- tail
    # head -- node1 -- node2 -- tail
    
    new_node = Node.new(key, val)

    if self.empty?
      new_node.prev = self.head
      new_node.next = self.tail
      self.head.next = new_node
      self.tail.prev = new_node
    else
      new_node.prev = self.tail.prev
      new_node.next = self.tail
      self.tail.prev = new_node
      new_node.prev.next = new_node
    end

  end

  def update(key, val)
    return nil if self.empty?
    self.each do |node|
      node.val = val if node.key == key
    end
  end

  def remove(key)
    return nil if self.empty?
    self.each do |node|
      if node.key == key
        node.remove 
        break
      end
    end
  end

  def each(&prc)
    node = @head

    unless self.empty?
    until node == self.last
      node = node.next
      prc.call(node)
    end
  end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end


