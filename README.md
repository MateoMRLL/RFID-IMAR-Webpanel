# RFID Log Viewer Web App

A web application that allows users to filter and view RFID tag logs by tag number and antenna source.

## Features

- **Filter logs** by tag number and/or antenna source
- **Real-time fetch** from a backend API
- Display results using responsive **cards**

## Tech Stack

- **Frontend**: React (with functional components & hooks)
- **Backend**: Node.js/Express (assumed from `backend.js`)
- **Styling**: CSS (via `App.css`)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MateoMRL/.git
   cd rfid-log-viewer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the backend** (assuming the backend uses Express):

   ```bash
   node backend.js
   ```

4. **Start the React app**:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /logs`: Fetch all logs
- `GET /logs/tag/:tagNumber`: Fetch logs by tag
- `GET /logs/antenna/:antenna`: Fetch logs by antenna
- `GET /logs/search?tag=xxx&antenna=yyy`: Fetch logs filtered by both tag and antenna

## File Structure

```
.
├── App.jsx               # Main frontend app logic
├── backend.js            # Backend server logic
├── components/
│   ├── Card.jsx          # UI component for displaying a single log
│   └── Researchfield.jsx # Filter input component
├── App.css               # Styling
└── README.md             # Project overview and instructions
```

## Notes

- The app runs on `http://localhost:3000` by default.
- Make sure CORS is handled properly in `backend.js` if frontend and backend are on different ports.
