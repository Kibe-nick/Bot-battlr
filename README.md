# Battle Bots
Welcome to Battle Bots, the ultimate platform for building and managing your very own Bot Army! As a galactic overlord, you can browse through a list of robots, add them to your army, and even discharge them when necessary.

# Table of Contents
Project Overview
Features
Getting Started
Usage
API Endpoints
Contributing

# Project Overview
Battle Bots is a web application built with React that allows users to:

View profiles of various bots.
Add individual bots to their army.
Release bots from their army.
Discharge bots from the backend and frontend.
The application fetches data from a local JSON Server and provides a dynamic, interactive interface for managing your bot army.

# Features
Bot Collection: Browse a collection of bots with details such as health, damage, armor, and more.
Add to Army: Enlist a bot into your army by clicking on it.
Your Bot Army: View and manage the bots in your army.
Release and Discharge: Release a bot from your army or discharge it from the backend.

# Installation
Clone the repository:

git clone https://github.com/kibe-nick/Bot-battlr.git
cd battle-bots

#Install the dependencies:

npm install
#Set up the JSON Server:

Create a db.json file in the project root with the following initial data:

{
  "bots": []
}
#Start the JSON Server:

npx json-server --watch db.json --port 8001

#Start the React application:

npm start
The application should now be running on http://localhost:3000 and the JSON Server on http://localhost:8001.

# Usage
View Bots: Navigate to the main page to see a list of available bots.
Add to Army: Click on a bot to add it to your army.
Manage Army: View and manage your army in the "Your Bot Army" section.
Release/Discharge Bots: Use the provided buttons to release or discharge bots.
# API Endpoints
GET /bots: Retrieve all bots.
POST /bots: Add a new bot (not used in the app but available for future development).
DELETE /bots/
: Remove a bot by ID.
# Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code follows the project's coding standards and includes relevant tests.

# Live Demo
You can access the live application at https://bots-park.vercel.app/