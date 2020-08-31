# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '../app/models/AnswerChoice.rb'
require_relative '../app/models/Poll.rb'
require_relative '../app/models/Question.rb'
require_relative '../app/models/Response.rb'
require_relative '../app/models/User.rb'


AnswerChoice.destroy_all
Poll.destroy_all
Question.destroy_all
Response.destroy_all
User.destroy_all

#-----------Users-------------
user1 = User.create(username: 'eric2523')
user2 = User.create(username: 'bobross_xd')
user3 = User.create(username: 'jack_fruit25')

#-----------Polls------------
foods = Poll.create(title: 'Foods', author_id: user1.id)
music = Poll.create(title: 'Music Genres', author_id: user2.id)
sports = Poll.create(title: 'Sports', author_id: user3.id)

#-----------Foods Questions------------
foods_question1 = Question.create(body: 'Do you cook at home?', poll_id: foods.id)
foods_question2 = Question.create(body: 'Milk first or cereal first', poll_id: foods.id)
foods_question3 = Question.create(body: 'Choose one that you can''t live without', poll_id: foods.id)

#-----------Music Genre Questions------------
music_question1 = Question.create(body: 'Most listened to Genre?', poll_id: music.id)
music_question2 = Question.create(body: 'Whats your favorite instrument?', poll_id: music.id)
music_question3 = Question.create(body: 'Have you ever played GuitarHero?', poll_id: music.id)

#-----------Sports Questions------------
sports_question1 = Question.create(body: 'Whats your favorite sport?', poll_id: sports.id)
sports_question2 = Question.create(body: 'Who is going to win the superbowl?', poll_id: sports.id)
sports_question3 = Question.create(body: 'Favorite basketball player?', poll_id: sports.id)

#-----------Foods Q1 Answer Choices------------
f_q1_response1 = AnswerChoice.create(text: 'I prefer takeout', question_id: foods_question1.id)
f_q1_response2 = AnswerChoice.create(text: 'I cook..chefs kiss', question_id: foods_question1.id)

#-----------Foods Q2 Answer Choices------------
f_q2_response1 = AnswerChoice.create(text: 'Milk of course', question_id: foods_question2.id)
f_q2_response2 = AnswerChoice.create(text: 'Cereal first or you are weird', question_id: foods_question2.id)

#-----------Foods Q3 Answer Choices------------
f_q3_response1 = AnswerChoice.create(text: 'Pizza', question_id: foods_question3.id)
f_q3_response2 = AnswerChoice.create(text: 'Cake', question_id: foods_question3.id)
f_q3_response3 = AnswerChoice.create(text: 'Thai Food', question_id: foods_question3.id)
f_q3_response4 = AnswerChoice.create(text: 'Sushi', question_id: foods_question3.id)

#-----------Music Q1 Answer Choices------------
m_q1_response1 = AnswerChoice.create(text: 'Rock', question_id: music_question1.id)
m_q1_response2 = AnswerChoice.create(text: 'Hip Hop', question_id: music_question1.id)
m_q1_response3 = AnswerChoice.create(text: 'Pop', question_id: music_question1.id)

#-----------Music Q2 Answer Choices------------
m_q2_response1 = AnswerChoice.create(text: 'Piano', question_id: music_question2.id)
m_q2_response2 = AnswerChoice.create(text: 'Trumpet', question_id: music_question2.id)
m_q2_response3 = AnswerChoice.create(text: 'Guitar', question_id: music_question2.id)

#-----------Music Q3 Answer Choices------------
m_q3_response1 = AnswerChoice.create(text: 'I play Through The Fire and Flames on extreme', question_id: music_question3.id)
m_q3_response2 = AnswerChoice.create(text: 'Games are for kids', question_id: music_question3.id)

#-----------Sports Q1 Answer Choices------------
s_q1_response1 = AnswerChoice.create(text: 'Basketball', question_id: sports_question1.id)
s_q1_response2 = AnswerChoice.create(text: 'Football', question_id: sports_question1.id)
s_q1_response3 = AnswerChoice.create(text: 'Soccer', question_id: sports_question1.id)
s_q1_response4 = AnswerChoice.create(text: 'Golf', question_id: sports_question1.id)

#-----------Sports Q2 Answer Choices------------
s_q2_response1 = AnswerChoice.create(text: 'Kansas City', question_id: sports_question2.id)
s_q2_response2 = AnswerChoice.create(text: 'Dolphins', question_id: sports_question2.id)
s_q2_response3 = AnswerChoice.create(text: '49ers', question_id: sports_question2.id)

#-----------Sports Q3 Answer Choices------------
s_q3_response1 = AnswerChoice.create(text: 'Lebron James', question_id: sports_question3.id)
s_q3_response2 = AnswerChoice.create(text: 'Steph Curry', question_id: sports_question3.id)
s_q3_response3 = AnswerChoice.create(text: 'Luka Doncic', question_id: sports_question3.id)

#-----------Responses Q3 Answer Choices------------
