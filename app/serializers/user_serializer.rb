class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :gender, :email, :about
end
