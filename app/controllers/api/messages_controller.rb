class Api::MessagesController < ApplicationController
    def show
        @messages = User.find(params[:id]).messages
        render :show
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render json: @message
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:room_id, :user_id, :message)
    end
end
