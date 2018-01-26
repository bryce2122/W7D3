class Api::PokemonController < ApplicationController
  before_action :set_poke_params, only: [:show,:update]

  def show

  end

  def index
    @pokemon = Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      @pokemon.items = [Item.new(pokemon_id: @pokemon.id, name: "garfunkel's guitar", price: 100, happiness: 100, image_url: "/assets/pokemon_berry.svg")]
      render :show
    else
       render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def update

  end

  private
    def set_poke_params
      @pokemon = Pokemon.find_by(id: params[:id])
    end

    def pokemon_params
      params.require(:pokemon).permit(:name, :attack, :defense, :moves, :poke_type, :image_url)
    end
end
