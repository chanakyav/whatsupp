class RoomChannel < ApplicationCable::Channel
    def subscribed
        room = Room.find(params[:room_id])
        stream_for room
    end
    
    def unsubscribed
    end
end