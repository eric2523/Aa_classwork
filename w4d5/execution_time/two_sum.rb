def two_sum_one(arr, target)
    (0...arr.length).each do |idx1|
        ((idx1+1)...arr.length).each do |idx2|
            return true if arr[idx1] + arr[idx2] == target
        end
    end
    false
end


arr = [0, 1, 5, 7, 9]
# p two_sum_one(arr, 6) # => should be true
# p two_sum_one(arr, 10)

arr1 = [0, 1, 5, 7,  24, 50, 16, -3, 10]
# p two_sum_two(arr, 10)

# target = 10
# [-3, 0, 1, 5, 7]
# [10, 16, 24, 50]
def better_two_sum(arr, target)
  sorted = arr.sort #n log n
  sorted.each do |ele|
    dif = target - ele
   return true if sorted.bsearch{|x| x == dif}
  end
  false
end
# 
# p better_two_sum(arr1, 928) # false


# {
#     0 => 6
#     1 => 5
#     5 => 1
#     7 => -1
#     9 => -3
# }

arr = [0, 1, 5, 7, 9]
# p two_sum_one(arr, 6)

def even_better_two_sum(arr, target)
  hash = {}

  arr.each {|ele| hash[ele] = target - ele}

  hash.each_key {|key| return true if hash.key?(hash[key]) }
  false
end

def also_even_better_two_sum(arr, target)
  hash = Hash.new(0)
  arr.each{|ele| hash.key?(target - ele) ? (return true) : hash[ele] += 1}
  false
end

p even_better_two_sum(arr, 6)
p also_even_better_two_sum(arr, 6)