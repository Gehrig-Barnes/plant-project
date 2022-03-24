class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :gender, :email, :about, :image
  has_many :uploads
  has_many :followers
  has_many :followings
 
end
