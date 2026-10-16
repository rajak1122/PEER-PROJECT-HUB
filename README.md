PeerProjectHub
PeerProjectHub is a full-stack collaborative platform designed to connect developers, enable peer-to-peer project sharing, and foster collaborative code reviews. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it serves as a centralized hub for managing shared repositories, reviewing developer milestones, and tracking ongoing team collaboration.
🌐 Live Demo
🔗 Live Link: peer-project-hub-iota.vercel.app
✨ Features
Project Showcase: Share and display structural application blueprints or full-stack software repositories cleanly with details.
Collaborative Workspace: Connected environment tailored for developer networking, code peer-reviews, and technical feedback exchange.
Persistent Storage: Integrated database systems to securely store profile milestones, shared project attributes, and communication records across user sessions.
RESTful Architecture: High-speed communication pipeline bridging a responsive user layout directly to a modular Express routing backend.
Responsive Layout: Adaptive design framework optimized to provide an editorial, fluid visualization experience on mobile, tablet, and monitor viewports.
🛠 Tech Stack
Frontend Framework: React.js
Backend Environment: Node.js, Express.js
Database Engine: MongoDB
Routing & Client Layers: REST APIs, React Router Dom, Axios
Deployment Platform: Vercel
📂 Project Structure
```text
PEER-PROJECT-HUB/
├── client/     # React.js user interface configuration
└── server/     # Node.js, Express.js backend API and database schemas
```
🚀 Getting Started
1. Clone the Workspace
```bash
git clone https://github.com/rajak1122/PEER-PROJECT-HUB.git
cd PEER-PROJECT-HUB
```
2. Install Project Dependencies
Install standard packages inside both subfolders to initialize the environment modules:
```bash
# Setup backend parameters
cd server
npm install

# Setup frontend parameters
cd ../client
npm install
```
3. Environment Variable Settings
Create a custom `.env` configuration template file inside your `server` root folder directory and provide your live running parameters:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```
4. Boot Up the Servers
```bash
# Launch the API backend (inside server directory)
npm start

# Launch the Vite or standard development client (inside client directory)
npm start
```
📌 Key Highlights
Full-stack decoupled client-server architecture
Shared project logs and repository showcase fields
Secure asynchronous network communication mapping
Completely responsive grid systems matching minimalist design goals
