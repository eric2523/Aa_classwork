# json.set! users.id do |user|
    json.extract! users,
        :id,
        :username
# end
