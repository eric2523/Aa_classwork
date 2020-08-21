require "byebug"

def first_anagram(string, target_string)
    anagrams = [] #[abc]
    copy = string.dup
    anagrams << copy
    reversed = true

    new_string = copy.reverse #[abc, ]

    while anagrams.first != new_string
    anagrams << new_string.dup
        if reversed
            new_string[0], new_string[1] = new_string[1], new_string[0]
            reversed = false
        else 
            new_string.reverse!
            reversed = true
        end
    end
    return anagrams.include?(target_string)
end

# p first_anagram("abc", "sdf")
def second_anagram(string, target_string)
    clone = target_string.split("") # M 
    string.each_char.with_index do |char, idx| # N
        i = clone.index(char) # M
        clone.delete_at(i) if i # M
    end
    return clone.empty? # M 
end

# p second_anagram("gizmo", "sally")    #=> false
# p second_anagram("elvis", "lives")    #=> true

def third_anagram?(string, target_string) #n log n
  sorted1 = string.split("").sort
  sorted2 = target_string.split("").sort

  sorted1 == sorted2
end

# p third_anagram?("zero", "two")
# p third_anagram?("hello", "llohe")

def fourth_anagram?(string, target_string) 
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)

string.each_char{|char| hash1[char] += 1}
target_string.each_char{|char| hash2[char] += 1}

hash1.each {|k, v| return false unless hash1[k] == hash2[k]}
true
end

# p fourth_anagram?("zero", "two")

def bonus_anagram?(string, target_string) 
  hash1 = Hash.new(0)

string.each_char{|char| hash1[char] += 1}
target_string.each_char do |char| 
    hash1[char] -= 1
end

hash1.each_value {|value| return false if value != 0}
true
end

p bonus_anagram?("zero", "two")