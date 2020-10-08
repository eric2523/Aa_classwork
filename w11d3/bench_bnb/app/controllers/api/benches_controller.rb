class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create 
    @bench = Bench.new(bench_params)
    if @bench.save 
      render :show
    else
      render json: ["This bench does not exist"], status: 422
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
