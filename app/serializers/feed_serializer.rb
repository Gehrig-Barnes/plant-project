class FeedSerializer < ActiveModel::Serializer
  attributes :id, :username, :image
  has_many :followings
end
