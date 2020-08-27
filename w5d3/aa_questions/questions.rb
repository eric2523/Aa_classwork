require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class User
    attr_reader :id, :fname, :lname
    def self.all
        users = QuestionsDatabase.instance.execute(<<-SQL)
            SELECT
                *
            FROM
                users;      
        SQL
        users.map {|user| User.new(user)}
    end

    def self.find_by_name(fname, lname)
        users = User.all
        users.each {|user| return user if user.fname == fname && user.lname == lname}
        nil
    end


    def initialize(options)
        @id = options['id']
        @fname = options['fname'] 
        @lname = options['lname']
    end

    def authored_questions
        Question.find_by_id(self.id)
    end

end

class Question
    attr_reader :id
    def self.all
        questions = QuestionsDatabase.instance.execute(<<-SQL)
            SELECT
                *
            FROM
                questions;      
        SQL
        questions.map {|question| Question.new(question)}
    end

    def self.find_by_id(id)
        questions = Question.all
        questions.each {|question| return question if question.id == id}
        nil
    end

    def initialize(options)
        @id = options['id']
        @title = options['title'] 
        @body = options['body']
        @author_id = options['author_id']
    end

    
end
