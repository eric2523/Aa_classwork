require "set"

class WordChainer
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

    def run(source, target)
        #incomplete: what is target??
        @current_words = [source]
        @all_seen_words = [source]

        until @current_words.empty?
            @new_current_words = []
            @current_words.each do |current_word|
                self.adjacent_words(current_word).each do |adj_word|
                    if !@all_seen_words.include?(adj_word)
                        @new_current_words.push(adj_word)
                        @all_seen_words.push(adj_word)
                    end
                end
            end
            puts new_current_words
            #makes new @current_words to find new adj words 
            @current_word = @new_current_words
        end
    end

    private
    attr_reader :dictionary
end

# test = WordChainer.new("dictionary.txt")
# p test.adjacent_words("abet")
