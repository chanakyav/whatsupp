class Api::RoomsController < ApplicationController
    def show
        room_ids = Chat.where(user_id: params[:id]).pluck(:room_id)
        @rooms = Room.where(:id => room_ids)
        render :show
    end

    def create
        user1 = User.find(room_params[:user1_id])
        user2 = User.find_by_phone_number(room_params[:user2_phone_number])
        phone_numbers = [user1.phone_number, user2.phone_number].sort!
        @room = Room.new(name: phone_numbers.join('-'))
        if @room.save
            Chat.create(room_id: @room.id, user_id: user1.id)
            Chat.create(room_id: @room.id, user_id: user2.id)
            render json: @room
        else
            render json: @room.errors.full_messages, status: 422
        end
    end

    private

    def room_params 
        p params
        params.require(:room).permit(:user1_id, :user2_phone_number)
    end
end
