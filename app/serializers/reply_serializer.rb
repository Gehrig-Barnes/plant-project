class ReplySerializer < ActiveModel::Serializer
  attributes :id, :message, :likes, :dislike
  has_one :forum
end
