require "set"

class WordChainer
    attr_reader :dictionary

    def initialize(dictionary_file_name)
        @dictionary = Set.new
        IO.foreach(dictionary_file_name) {|line| @dictionary.add(line.to_s.chomp)}
    end

    def adjacent_words(word)
        adj_words = []
        word.each_char.with_index do |char, i|
            ('a'..'z').each do |letter|
                next if char == letter 
                a_word = word.dup
                a_word[i] = letter

                adj_words.push(a_word) if dictionary.include?(a_word)
            end
        end
        adj_words
    end

end

# test = WordChainer.new("dictionary.txt")
# p test.adjacent_words("abet")
