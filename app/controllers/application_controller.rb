class ApplicationController < ActionController::Base
  # before_action :restrict_access
  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session

  def restrict_access
    authenticate_or_request_with_http_token do |api_key, option|
      User.find_by(email: request.headers['Y-User-Email'], api_key: api_key)
    end 
  end
end
