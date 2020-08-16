require "set"

class WordChainer
    attr_reader :dictionary

    def initialize(dictionary_file_name)
        @dictionary = Set.new
        IO.foreach(dictionary_file_name) {|line| @dictionary.add(line.to_s.chomp)}
    end
end

