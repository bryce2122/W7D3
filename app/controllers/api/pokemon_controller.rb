class Api::PokemonController < ApplicationController
  before_action :set_poke_params, only: [:show,:update]

  def show

  end

  def index
    @pokemon = Pokemon.all
  end

  def create

  end

  def update

  end

  private
    def set_poke_params
      @pokemon = Pokemon.find_by(id: params[:id])
    end
end
