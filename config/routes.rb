Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resources :contacts, only: [:create, :show, :destroy]
    resources :rooms, only: [:create, :show, :destroy]
    get 'room/:name', to: 'rooms#roomId' 
    resources :messages, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
  mount ActionCable.server => '/cable'
end
