class NameController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    names_list = ["Dalton Huey", "Derek Montgomery", "Bibek Manandhar", "Gabriel Barbatto", "Sarah Kelleher", "Arisha Islam", "Matt Aho", "Tanya Genrich"]
    @name = names_list.sample
    # respond_to :json
    sleep 2
    render json: {name: @name, status: :ok}
  end
end
