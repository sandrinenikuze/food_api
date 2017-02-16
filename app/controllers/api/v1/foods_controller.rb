class Api::V1::FoodsController < ApplicationController
  
  def index
    @foods = Food.all
  end 

  def create
    @foods = Food.create(ingredient: params[:ingredient], spice: params[:spice], measurment: params[:measurment])
    render :show
  end 

  def show
    @food = Food.find_by(id:params[:id])
  end 

  def update
   @food = Food.find_by(id:params[:id])
   @food.update(
     ingredient:params[:ingredient],
     spice: params[:spice],
     measurment: params[:measurment]
    )
   render :show 
  end 
  def destroy
   @food = Food.find_by(id: params[:id])
   @employee.destroy
   render json: {message: "Recipe Destroyed !!!!!"}
  end 
end
