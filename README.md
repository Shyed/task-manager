Task Manager API
A full-stack Task Manager web application built with Node.js, Express, MongoDB Atlas, and Render for deployment. It allows users to create, read, update, and delete tasks.

Live API
https://task-manager-vr7v.onrender.com/api/tasks

Features
Create and save new tasks
Get a list of all tasks
View a specific task by ID
Update an existing task
Delete a task
Connected to MongoDB Atlas

Deployed with Render

Tech Stack
Backend: Node.js, Express
Database: MongoDB Atlas
Hosting: Render
Testing Tool: Postman

📁 Project Structure
bash
Copy
Edit
task-manager/
├── models/
│   └── Tasks.js
├── routes/
│   └── tasks.js
├── public/
│   ├── index.html
│   └── style.css
├── views/
│   └── layout.ejs (optional)
├── .env
├── package.json
└── server.js
📦 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get task by ID
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update task by ID
DELETE	/api/tasks/:id	Delete task by ID

Setup Instructions (Local)
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/task-manager-sd.git
cd task-manager-sd
Install dependencies

bash
Copy
Edit
npm install
Create a .env file

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
Start the server

bash
Copy
Edit
npm run dev

Author
Sheila Demonteverde @ 2025. All rights reserved.
