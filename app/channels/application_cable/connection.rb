module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # identified_by :verified_user

    # def connect

    #   self.verified_user = find_verified_user
    #   reject_unauthorized_connection unless verified_user
    # end

    # private
    #   def find_current_session_user
    #     env['warden']&.user;
    #   end

    #   def find_verified_user
    #     begin
    #       if verified_user = find_current_session_user
    #         @current_user = verified_user
    #         verified_user
    #       elsif verified_user = Player.find(cookies.encrypted[:krp_player_id])
    #         verified_user
    #       else
    #         reject_unauthorized_connection
    #       end
    #     rescue => e
    #       # debugger
    #     end
    #   end
  end
end
