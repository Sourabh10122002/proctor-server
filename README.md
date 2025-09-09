# 📡 Tutedude Backend (Proctor Server)

This is the backend server for the **Tutedude Proctoring System**.  
It is built with **Node.js, Express, TypeScript, and MongoDB (Mongoose).**

---

## 🚀 Features
- REST API with Express
- MongoDB integration via Mongoose
- Environment variables with dotenv
- TypeScript with `ts-node-dev` for development
- Production build with `tsc`
- Proctoring events and session reports

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/proctor-server.git
cd proctor-server
npm install
```

⚙️ Environment Setup

Create a .env file in the root folder:

PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>


Replace:

<username> → your MongoDB Atlas username

<password> → your MongoDB Atlas password

<database> → your database name

🛠️ Development

Run the server in watch mode (auto restarts on save):

npm run dev

🏗️ Build

Compile TypeScript into JavaScript:

npm run build


This will generate a dist/ folder with compiled files.

▶️ Production

Run the compiled server:

npm start


This executes:

node dist/server.js

📡 API Endpoints
🔹 Health Check
GET /api/health


✅ Returns { status: "ok" }

🔹 Sessions

Create a new session

POST /api/sessions


Body (JSON)

{
  "sessionId": "session_123",
  "candidateName": "John Doe",
  "startTime": "2025-01-01T10:00:00Z",
  "endTime": "2025-01-01T11:00:00Z",
  "duration": 3600,
  "events": [],
  "integrityScore": 95
}


Get all sessions

GET /api/sessions


Get session by ID

GET /api/sessions/:id


Generate report for a session

GET /api/sessions/:id/report


✅ Returns counts of suspicious activities (focus lost, absence, etc.) and integrity score.
