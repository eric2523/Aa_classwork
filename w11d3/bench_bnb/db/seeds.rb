# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Bench.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('Users')
# ActiveRecord::Base.connection.reset_pk_sequence!('Benches')
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Bench.connection.execute('ALTER SEQUENCE benches_id_seq RESTART WITH 1')

# populate benches
b1 = Bench.create(description: "Painted Ladies", lat: 37.776223, lng: -122.432599)
b2 = Bench.create(description: "Alamo Square Park", lat: 37.775563, lng: -122.435335)
b3 = Bench.create(description: "McAllister St", lat: 37.778722, lng: -122.432837)