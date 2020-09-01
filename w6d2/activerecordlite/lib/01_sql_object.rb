require_relative 'db_connection'
require 'active_support/inflector'
require "byebug"
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    return @columns if @columns 
    result = DBConnection.execute2(<<-SQL).first
      SELECT 
        *
      FROM
        #{self.table_name}
    SQL
    symbols = result.map(&:to_sym)
    @columns = symbols
  end

  def self.finalize!
    self.columns.each do |column|
      #getter
      define_method(column) do 
        self.attributes[column] unless self.attributes[column].nil?
      end

      #setter
      define_method("#{column}=") do |value|
        # debugger
        self.attributes[column] = value unless self.attributes[column]
      end

    end
  end

  def self.table_name=(table_name)
    # ...
    @table_name = table_name
  end

  def self.table_name
    # ...
    @table_name || self.name.underscore.pluralize
  end

  def self.all
   
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
    
  end

  def attributes
    # ...
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
