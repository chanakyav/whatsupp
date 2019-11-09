class Api::ContactsController < ApplicationController

    # before_action :require_logged_in, only: [:create, :index, :destroy]

    def show
        contact_ids = User.find(params[:id]).contacts.pluck(:contact_id)
        @contacts = User.where(:id => contact_ids)
        render :show
    end

    def create
        user = User.find_by_phone_number(contact_params[:phone_number])
        unless user
            render json: ['Phone number not found'], status: 404
            return
        end
        @contact = Contact.new({user_id: contact_params[:id], contact_id: user.id})
        if @contact.save
            render json: user
        else
            render json: @contact.errors.full_messages, status: 422
        end
    end

    def destroy
        id = params[:id]
        user = User.find_by_phone_number(contact_params[:phone_number])
        contact = Contact.where(user_id: id, contact_id: user.id)
        contact.first.destroy
        render json: user
    end

    private

    def contact_params
        params.require(:contact).permit(:id, :phone_number)
    end

end
