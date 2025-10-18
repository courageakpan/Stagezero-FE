#  HNG Frontend Stage 0 — Testable Profile Card

This project is part of the **HNG Internship (Frontend Track, Stage 0)**.  
The goal is to build a **responsive and accessible Profile Card** using only **HTML, CSS, and Vanilla JavaScript** — with every visible element containing the required `data-testid` attributes for automated testing.

---

##  Task Overview

I built a small Profile Card that displays:
-  My name  
-  A short bio  
-  The current time (in milliseconds)  
-  A profile image (avatar)  
-  My social links  
-  A list of my hobbies  
-  A list of my dislikes  

Each element follows the exact naming rules (like `data-testid="test-user-name"`) so tests can find them easily.

---

##  Features

✅ Semantic HTML (using `<article>`, `<figure>`, `<section>`, `<nav>`, etc.)  
✅ Responsive layout for mobile, tablet, and desktop  
✅ Accessible image with `alt` text  
✅ Current time updates dynamically using `Date.now()`  
✅ Clean, readable design built with Flexbox and media queries  
✅ Keyboard-friendly and fully focusable links  

---

## 🧩 Project Structure

frontend-stage0/
│
├── index.html
├── style.css
├── script.js
└── README.md

##  How to Run Locally

1️⃣ **Clone the repository**
```bash
git clone https://github.com/yourusername/hng-frontend-stage0.git
cd hng-frontend-stage0
2️⃣ Open the project
Simply open index.html in your web browser.

3️⃣ Optional
Use the VS Code Live Server extension to preview your changes and test responsiveness easily.

#Data Test IDs Used
Element	Data Test ID
Profile Card Container	test-profile-card
User Name	test-user-name
User Bio	test-user-bio
Current Time	test-user-time
Avatar Image	test-user-avatar
Social Links List	test-user-social-links
Hobbies List	test-user-hobbies
Dislikes List	test-user-dislikes

#Responsiveness Overview
Device Type	Layout Behavior
Mobile (< 700 px)	All items stack vertically
Tablet (700 – 1023 px)	Avatar and text side-by-side
Desktop (≥ 1024 px)	Wider layout with clean spacing and balanced alignment

The layout automatically adjusts to any screen size using CSS Flexbox and media queries.

#What I Learned
How to use semantic HTML for accessibility

How to apply responsive design with CSS media queries

How to make all visible elements testable with data-testids

How to use JavaScript to show live data (like Date.now())

The importance of simple, clean, and scalable front-end code

# Submission Details
Name: Courage Akpan
Task: Frontend Stage 0 — Profile Card
Stack: HTML / CSS / JavaScript
Submission Deadline: 19 October 2025

# Live Demo & Repository Links
Live Demo: 
GitHub Repo: 

#Author
Courage Akpan
GitHub: 