# Voyantis Queue Viewer

A web application that allows users to view and manage queues of messages in real-time. This project consists of two main parts:

1. **Frontend**: A React app that interacts with the backend to display available queues and fetch messages.
2. **Backend**: A Ruby on Rails API that handles the queue management, including message fetching and posting.

## Features

- View the list of available queues.
- Fetch messages from selected queues.
- Automatically update message count when messages are retrieved.
- Show real-time queue details.

## Technologies Used

- **Frontend**: React
- **Backend**: Ruby on Rails
- **API Communication**: Fetch API for making HTTP requests between frontend and backend.
- **State Management**: React `useState` hooks for managing the UI state.
- **CORS**: Configuration for handling cross-origin requests between frontend (React) and backend (Rails).

## Requirements

### Backend (Ruby on Rails)

- Ruby 2.7.0 or higher
- Rails 6 or higher
- PostgreSQL or another database if configured differently

### Frontend (React)

- Node.js v16 or higher
- npm (comes with Node.js)
- React 17 or higher

## Installation and Setup

### Step 1: Clone the Repository
### Step 2: Setup backend
 - `cd voyantis-backend`
 - `bundle install`
 - `rails db:create`
 - `rails db:migrate`
 - `rails server -p 2024`
### Step 3: Setup Frontend
 - `cd voyantis-queue-viewer`
 - `npm install`
 - `npm start`

