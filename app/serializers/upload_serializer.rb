class UploadSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :likes
  has_one :user
end
