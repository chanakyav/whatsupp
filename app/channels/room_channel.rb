class RoomChannel < ApplicationCable::Channel
    def subscribed
        p params
        # room = Room.find(params[:room_id])
        # stream_for room
        stream_from "room_channel"
    end
end