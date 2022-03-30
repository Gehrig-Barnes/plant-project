Rails.application.routes.draw do
  
  resources :favorites
  resources :replies
  resources :forums
  resources :comments
  resources :uploads
  resources :users
  resources :follows
  

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/user_follow/:id", to: 'users#user_follow'
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  patch "/edit_about/:id", to: "users#edit_about"
  get "/followings/:id", to: "users#followings"
  get "/all_users", to: "users#all_users"
  get "/followings", to: "users#followings"
  post "/follow", to: "users#create_follow"
  get "/user_followings", to: "follows#user_followings"
  post "/delete_follow", to: "follows#delete_follow"
  get "/feed/", to: "follows#feed"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
