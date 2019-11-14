class Api::MessagesController < ApplicationController

    before_action :require_logged_in, only: [:create, :show]

    def show
        room_ids = Chat.where(user_id: params[:id]).pluck(:room_id)
        @messages = Message.where(:room_id => room_ids)
        render :show
    end

    def create
        @message = Message.new(message_params)
        room = Room.find(@message.room_id)
        if @message.save
            # render json: @message
            # RoomChannel.broadcast_to room, @message
            ActionCable.server.broadcast 'room_channel', @message
            head :ok
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:room_id, :user_id, :message)
    end
end
