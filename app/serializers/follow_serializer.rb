class FollowSerializer < ActiveModel::Serializer
  attributes :id
  has_many :uploads
  
end
