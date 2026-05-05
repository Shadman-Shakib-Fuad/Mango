# 📚 Mango Library – Online Book Borrowing Platform

## 🚀 Project Overview

Mango Library is a modern web application that digitizes the traditional library experience. Users can explore books, view details, and borrow them online. The platform is designed with a clean UI, responsive layout, and simple authentication system.

---

## 🌐 Live Website

https://mango-sage.vercel.app/

---

## 🎯 Purpose

The goal of this project is to:

* Provide a digital library experience
* Allow users to browse and borrow books
* Practice full-stack concepts using Next.js

---

## ✨ Key Features

### 🔐 Authentication

* User Registration (Name, Email, Photo, Password)
* User Login & Logout
* Authentication using Context API + LocalStorage

### 🔒 Private Routes

* Book Details page (only logged-in users)
* Profile page protection

### 📚 Books System

* 15+ Books displayed
* Book Details page with:

  * Author
  * Description
  * Published Year (randomized)
  * Rating ⭐
  * Pages 📖
  * Language 🌍
  * Publisher 🏢
* Borrow system (decreases available quantity)

### 🔎 Search & Filter

* Search books by title
* Category filter (Story, Tech, Science)

### 👤 User Profile

* View user information
* Update Name & Photo feature

### 📦 Borrow Page

* Shows all borrowed books
* Option to clear all borrowed books

### 🎨 UI/UX

* Responsive design (Mobile, Tablet, Desktop)
* Sticky Navbar
* Custom Footer
* Marquee animation
* Hover effects on buttons

### 🧠 Extra Section

* "What Great Minds Say About Books"
* Articles from famous personalities

---

## 🛠️ Technologies Used

* Next.js 16 (App Router)
* React.js
* Tailwind CSS
* DaisyUI
* JavaScript (ES6)
* LocalStorage (for data persistence)

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── page.js (Home)
 │   ├── books/
 │   ├── login/
 │   ├── register/
 │   ├── profile/
 │   └── borrow/
 │
 ├── components/
 │   ├── Navbar.js
 │   ├── Footer.js
 │   └── BookCard.js
 │
 ├── context/
 │   └── AuthContext.js
 │
 ├── data/
 │   └── books.json
```

---

## 🔐 Environment Variables

(Not required for this version – using LocalStorage)

---

## 📦 NPM Packages Used

* daisyui
* tailwindcss
* next
* react

---

## 📌 Future Improvements

* Google Authentication
* Database integration (MongoDB)
* BetterAuth implementation
* Real-time borrow tracking

---

## 👨‍💻 Author

**Shadman Fuad**

---

## 📜 License

This project is for educational purposes only.

---

## ⭐ Final Note

This project fulfills all the core requirements of the assignment including authentication, private routes, responsive design, and interactive features.
