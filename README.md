# Employee Attendance Tracker

A simple web application for employees to track their attendance and submit daily updates. This project demonstrates skills in frontend development using HTML, CSS, JavaScript, and React.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Mock API](#mock-api)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [License](#license)

## Objective

Create a web application for employees to track their attendance and submit daily updates, showcasing frontend development skills.

## Features

### Core Features

- **Dashboard**: 
  - Display current date and time
  - Show employee name and basic info (assumed logged-in user)
  - Quick access to main features (Clock In/Out, Daily Update)

- **Attendance Tracking**:
  - "Clock In" and "Clock Out" buttons
  - Display current status (Clocked In/Out)
  - Show total hours worked for the current day

- **Daily Update**:
  - Text area for employees to submit a brief daily update
  - Display previous updates (last 5 days)

### Bonus Features

- **Timesheet**:
  - Simple form to input hours worked on different projects
  - Display a weekly view of timesheets
  - Allow editing of timesheet entries

## Technical Requirements

- Built with React using functional components and hooks
- State management using React Context API or Redux
- Responsive design that works on both desktop and mobile devices
- UI component library: [Material-UI](https://mui.com/) (or specify your choice)
- Integrated with a mocked API using `json-server`

## Mock API

The application uses a mocked API simulated by `json-server`. It provides the following endpoints:

- **GET** `http://localhost:3001/employee` - Returns current employee information
- **GET** `http://localhost:3001/attendance` - Returns current day's attendance
- **PUT** `http://localhost:3001/attendance` - Clock in/out  
  Request body: `{ "status": "in" }` or `{ "status": "out" }`
- **GET** `http://localhost:3001/dailyUpdates` - Returns daily updates
- **POST** `http://localhost:3001/dailyUpdates` - Submit daily update  
  Request body: `{ "date": "YYYY-MM-DD", "update": "Your update here" }`

### Bonus Feature Endpoints

- **GET** `http://localhost:3001/timesheet` - Returns timesheet entries
- **POST** `http://localhost:3001/timesheet` - Submit timesheet entry  
  Request body: `{ "date": "YYYY-MM-DD", "projects": [{ "name": "Project A", "hours": 8 }] }`

## Setup Instructions

## Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

## Install dependencies for both frontend and backend:
    ### Install frontend dependencies
      cd client
      npm install

    ### Install backend dependencies
      cd ../server
      npm install


## Set up and run the mock API:
   ### Ensure json-server is installed globally
     npm install -g json-server
   ### Run the mock API: 
     json-server --watch db.json --port 3001

4. Start the React application:
   cd ../client
   npm start



### Customization
- Update the GitHub repository link in the Setup Instructions section.
- Adjust the usage, deployment, or improvement sections based on your specific implementation and features.
