# 🍽️ QuickDine – Restaurant Booking Application

QuickDine is a modern full-stack restaurant booking application built with **React, TypeScript, Node.js, Express.js, and MongoDB**. It enables users to discover restaurants, view restaurant details, and reserve tables online through a secure and responsive web application.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- Secure JWT Authentication
- Browse Restaurants
- Search Restaurants
- View Restaurant Details
- Book Tables Online
- View Booking History
- Update User Profile
- Responsive Design

### 🍴 Restaurant Features
- Display Restaurant Information
- Table Reservation Management
- Booking Availability
- Reservation Tracking

---

## 🛠️ Tech Stack

### Frontend
- React.js
- TypeScript
- Vite
- HTML5
- CSS3
- React Router DOM

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)

### Deployment
- Vercel (Frontend)
- Render / Railway (Backend)

---

## 📂 Project Structure

```
QuickDine/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── types/
│   └── server.ts
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Priyam2773/QuickDine.git
```

### 2. Navigate to the Project

```bash
cd QuickDine
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Running the Application

### Start the Backend

```bash
npm run dev
```

### Start the Frontend

```bash
cd ../client
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 📸 Screenshots

Add screenshots of your application here.

- Home Page
- Restaurant Listing
- Restaurant Details
- Table Booking
- User Dashboard

---

## 🚀 Future Enhancements

- Restaurant Owner Dashboard
- Admin Dashboard
- Booking Confirmation Email
- Payment Gateway Integration
- Reviews & Ratings
- Google Maps Integration
- Push Notifications
- Favorite Restaurants
- Advanced Search & Filters
- Dark Mode

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 👨‍💻 Author

**Priyam Rai**

- GitHub: https://github.com/Priyam2773
- LinkedIn: https://www.linkedin.com/in/priyam-rai-613470308/
- Portfolio: https://portfolio-nine-eta-46dt6tlkxn.vercel.app/

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub. Your support is greatly appreciated!

---

## 📄 License

This project is licensed under the MIT License.
