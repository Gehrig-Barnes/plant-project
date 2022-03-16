class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :gender, :email, :about
  has_many :uploads
end
