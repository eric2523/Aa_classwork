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
      #defining a getter for each col
      #getting from @attributes hash
      define_method(column) do 
        self.attributes[column] unless self.attributes[column].nil?
      end

      #defining a setter for each column 
      #mutating @attributes hash with value argument
      ## c.name = "nick diaz" |value| is nick diaz
      define_method("#{column}=") do |value|
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
    hash_objects = DBConnection.execute(<<-SQL)
      select 
        #{self.table_name}.*
      from
        #{self.table_name}
      SQL
    result = self.parse_all(hash_objects)
    result
  end

  def self.parse_all(results)
    # ...
    parsed_res = results.map do |hash|
      self.new(hash)
    end
    parsed_res
  end

  def self.find(id)
    # ...
    result = DBConnection.execute(<<-SQL)
      select
        #{self.table_name}.*
      from
        #{self.table_name}
      where
        #{self.table_name}.id = #{id}
    SQL
    return nil if result.empty?
    self.new(result.first)
  end

  def initialize(params = {})
    # ...
      params.each do |attr_name,v|
        col = attr_name.to_sym
        raise "unknown attribute '#{attr_name}'" if !self.class.columns.include?(col)
        self.send("#{col}=", v)
      end
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
