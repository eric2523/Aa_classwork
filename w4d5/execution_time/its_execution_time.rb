#---- Phase 1-----
# def my_min(list)
#     smallest_element = list[0]
#     list.each do |ele_1|
#         smallest_element = ele_1 if ele_1 < smallest_element
#         list.each do |ele_2|
#            smallest_element = ele_2 if ele_2 < smallest_element
#         end
#     end
#     smallest_element
# end

#---- Phase 2------
def my_min(list)
    smallest_element = list[0]
    list.each do |ele|
        smallest_element = ele if ele < smallest_element
    end
    smallest_element
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)


#--Largest contagous sum--
#----Phase 1----
def largest_contiguous_subsum(list)
    sub_arr = []

    (0...list.length).each do |idx_1|
        (idx_1+1...list.length).each do |idx_2|
           sub_arr << list[idx_1..idx_2].sum
        end
    end

    sub_arr.inject do |acc, el|
        if el > acc 
            acc = el 
        else
            acc
        end
    end
end


#----Phase 2----

def largest_contiguous_subsum(list)
  current_sum = 0#2
  largest_sum = 0#

  list.each do |ele|#-7
    current_sum += ele
    current_sum = 0 if current_sum < 0
    
    largest_sum = current_sum if current_sum > largest_sum
  end
 largest_sum 
end

list_three = [2, 3, -6, 7, -6, 7]
list_two = [2, 4, -4 , 6, -5, 9]
list = [5, 3, -7]
p largest_contiguous_subsum(list_three) # => 8 (from [7, -6, 7])
p largest_contiguous_subsum(list_two)
p largest_contiguous_subsum(list) # => 8
# # possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7







