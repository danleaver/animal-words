class Api::AnimalsController < ApplicationController
  def index
    render json: Animal.search(params[:search], params[:depth])
  end
end
