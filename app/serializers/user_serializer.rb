class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :gender, :email, :about, :image
  has_many :uploads
  has_many :followers
  has_many :followings
 
end
