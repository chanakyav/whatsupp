class Api::ContactsController < ApplicationController

    # before_action :require_logged_in, only: [:create, :index, :destroy]

    def show
        contact_ids = User.find(params[:id]).contacts.pluck(:contact_id)
        @contacts = User.where(:id => contact_ids)
        render :show
    end

    private

    def contact_params
        params.require(:contact).permit(:id, :phone_number)
    end

end
