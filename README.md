# PeerProjectHub

PeerProjectHub is a full-stack collaborative platform designed to connect developers, enable peer-to-peer project sharing, and foster collaborative code reviews. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it serves as a centralized hub for managing shared repositories, reviewing developer milestones, and tracking ongoing team collaboration.

## 🌐 Live Demo

🔗 **Live Link:** [peer-project-hub-iota.vercel.app](https://vercel.app)

## ✨ Features

### 💻 Project Showcase
- Share and display structural application blueprints cleanly.
- Showcase full-stack software repositories with comprehensive project logs.

### 👥 Collaborative Workspace
- Connect with other developers in a peer-to-peer networking environment.
- Exchange code reviews and technical project feedback.

### 🗃 Persistent Storage
- Integrated database systems securely store profile milestones.
- Maintains shared project attributes and communication records across user sessions.

### ⚡ RESTful Architecture
- High-speed communication pipeline bridging responsive client layouts.
- Connects user interfaces directly to a modular Express routing backend.

### 📱 Responsive Layout
- Adaptive design framework optimized for mobile, tablet, and monitor viewports.
- Fluid visualization experience across all device form factors.

## 🛠 Tech Stack

- **Frontend Framework:** React.js
- **Backend Environment:** Node.js, Express.js
- **Database Engine:** MongoDB
- **Routing & Client Layers:** REST APIs, React Router Dom, Axios
- **Deployment Platform:** Vercel

## 📂 Project Structure

```text
PEER-PROJECT-HUB/
├── client/     # React.js user interface configuration
└── server/     # Node.js, Express.js backend API and database schemas
```

## 🚀 Getting Started

### 1. Clone the Workspace
```bash
git clone https://github.com
cd PEER-PROJECT-HUB
```

### 2. Install Project Dependencies
Install standard packages inside both subfolders to initialize the environment modules:
```bash
# Setup backend parameters
cd server
npm install

# Setup frontend parameters
cd ../client
npm install
```

### 3. Environment Variable Settings
Create a custom `.env` configuration template file inside your `server` root folder directory and provide your live running parameters:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Boot Up the Servers
```bash
# Launch the API backend (inside server directory)
npm start

# Launch the client application (inside client directory)
npm start
```

## 📌 Key Highlights

- Full-stack decoupled client-server architecture
- Shared project logs and repository showcase fields
- Secure hosting and configuration patterns
