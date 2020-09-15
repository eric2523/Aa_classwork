Rails.application.routes.draw do
  resources :bands do 
    resources :albums, only: [:new]
  end

  resources :users
  resource :session, only: [:new, :create, :destroy]
  resources :albums, except: [:new, :index]

end
