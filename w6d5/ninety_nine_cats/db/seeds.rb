# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#----------cats----------
c1 = Cat.create(name: "Christina", birth_date: "2015/08/01", color: 'Orange', sex: "F", description: "Hi im christina the cat!")
c2 = Cat.create(name: "Suzie", birth_date: "2010/05/25", color: 'White', sex: "F", description: "Meow meow meow")
c3 = Cat.create(name: "Boberto", birth_date: "2012/08/25", color: 'Gray', sex: "M", description: "Whats goodie yall")