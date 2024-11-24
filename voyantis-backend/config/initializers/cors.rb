# Be sure to restart your server when you modify this file.

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3000'  # Allow requests from the React app running on port 3000
  
      resource '*',                     # Allow all resources
        headers: :any,                   # Allow any headers
        methods: [:get, :post, :options, :put, :delete]  # Allow the necessary HTTP methods
    end
  end
  