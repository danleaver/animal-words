Rails.application.routes.draw do

  namespace :api do
    namespace :animals do
      get 'search'
    end
    resources :animals
  end
  
end
