Bh⛳ Golf Charity Platform

A full-stack web application where users can track golf scores, participate in monthly draws, and contribute to charitable causes.

---

🚀 Features

👤 Authentication

- User registration and login
- JWT-based authentication
- Protected routes

🎯 Score Management

- Add golf scores (1–45)
- Automatically keeps last 5 scores
- Displays score history with dates

🎲 Monthly Draw System

- Generates 5 random numbers
- Matches user scores
- Determines winners (3, 4, 5 matches)
- Displays results in dashboard

❤️ Charity System

- View available charities
- Select preferred charity
- Contribution percentage stored

---

🛠 Tech Stack

Frontend

- React (Vite)
- Tailwind CSS
- Axios

Backend

- Node.js
- Express.js
- MongoDB (Mongoose)

---

⚙️ Installation

1. Clone the repository

git clone <your-repo-link>
cd project-folder

2. Backend setup

cd backend
npm install
npm run dev

3. Frontend setup

cd client
npm install
npm run dev

---

🔑 Environment Variables

Create a ".env" file in backend:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

---

📌 Notes

- Prize distribution is simplified for MVP
- Subscription/payment system is not implemented
- Winner verification can be added as future enhancement

---

📷 Screenshots

![alt text](<assets/Landing page.png>)
![alt text](<assets/Login_pGE.png>)
![alt text](<assets/Dashboard_Page.png>)
![alt text](<assets/Scores_Page.png>)
![alt text](<assets/Draw result.png>)
---

👨‍💻 Author

Aditya