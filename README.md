# 🎓 SkillSphere – Online Learning Platform

A modern and responsive online learning platform built with **Next.js**, where users can explore courses, view details, and manage their profile. SkillSphere focuses on skill-based learning like Web Development, Design, Marketing, Data Science and more.

---

## 🚀 Live Demo

👉 https://skill-sphere-saima.vercel.app

---

## 📌 Project Purpose

SkillSphere is designed to provide a seamless learning experience where users can:

- Browse and search courses
- View detailed course content
- Enroll in courses
- Manage their profile
- Authenticate securely using BetterAuth

---

## ✨ Key Features

### 🏠 Home Page
- Hero section with modern banner
- Trending / Popular courses
- Learning tips section
- Top instructors section
- Responsive UI for all devices

### 📚 Courses
- All courses listing page
- Search courses by title
- Dynamic course cards
- Course details page (protected route)

### 🔒 Authentication
- User Registration (Name, Email, Photo URL, Password)
- Login system
- Google OAuth login
- Protected routes

### 👤 Profile
- User profile dashboard
- Edit profile (name & image update)
- Account information display
- Activity timeline

### 📖 Course Details
- Full course information
- Instructor details
- Ratings & metadata
- Curriculum section (static)
- Enroll feature

### ⚡ Extra Features
- Toast notifications
- Loading states
- Not Found page
- Fully responsive design
- Clean UI with DaisyUI + Tailwind

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Next.js (App Router) | Framework |
| React 19 | UI Library |
| Tailwind CSS v4 | Styling |
| DaisyUI v5 | UI Components |
| BetterAuth | Authentication |
| MongoDB | Database |
| React Hook Form | Form Handling |
| React Hot Toast | Notifications |
| Framer Motion | Animations |

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/developersaima/skill-sphere

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── courses/
│   ├── profile/
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── section/
│   ├── AllCourses.jsx
│   ├── Hero.jsx
│   ├── Instructor.jsx
│   ├── Latest.jsx
│   ├── PopularCourse.jsx
│   └── Tips.jsx
├── lib/
│   ├── auth/
│   │   ├── auth.js
│   │   └── auth-client.js
│   └── courses.js
└── data/
    └── data.json
```

---

## 🧩 Main Pages

| Route | Description |
|---|---|
| `/` | Home Page |
| `/courses` | All Courses |
| `/courses/[id]` | Course Details (Protected) |
| `/login` | Login Page |
| `/register` | Register Page |
| `/profile` | User Profile |

---

## 🎯 Assignment Requirements Covered

- ✔ 10+ meaningful Git commits
- ✔ Fully responsive UI
- ✔ Protected routes
- ✔ Authentication (BetterAuth + Google Login)
- ✔ Course JSON data
- ✔ Search functionality
- ✔ Profile update feature
- ✔ Loading & Not-found page
- ✔ Unique UI design
- ✔ Deployment ready (Vercel)

---

## ⚠️ Notes

- Email verification & forgot password intentionally not implemented (as per assignment requirement)
- Reload-safe routing handled via Next.js App Router

---

## 👩‍💻 Developer

Built with ❤️ by **Saima Akter**

---

## 📜 License

This project is for educational purposes only.