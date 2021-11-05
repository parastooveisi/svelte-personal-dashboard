class MessageChannel < ApplicationCable::Channel
  EVENT = {
    message_created: "message_created",
  }

  def subscribed
    stream_from "messages_#{params[:user_id]}"
  end

  def create_message
    # @message = Message.new(message_params)
    puts "creating message"
    ActionCable.server.broadcast("messages_#{params[:user_id]}", {
      event: MessageChannel::EVENT[:message_created],
      message: {
        id: 1
      }
    })
  end

  private
    def message_params
      params.require(:message).permit(:subject, :body)
    end
end
