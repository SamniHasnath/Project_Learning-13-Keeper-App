# 📝 Keeper App

A modern, responsive note-taking application built with **React.js and Vite**, inspired by the simplicity and usability of Google Keep.

Keeper App provides a clean interface for creating and managing personal notes, with support for **Dark Mode, responsive layouts, smooth interactions, and component-based architecture**. The project demonstrates practical React concepts including reusable components, state management, event handling, and responsive UI development.

---

## 📌 Overview

Keeper App is designed to provide a simple and intuitive way to create and organize notes.

Users can quickly add notes with a title and content, view their notes in a responsive layout, and remove notes when they are no longer needed. The application also includes a theme switcher that allows users to move between Light and Dark modes.

The project was developed as a hands-on React application to strengthen frontend development skills and understand modern component-based application architecture.

---

## ✨ Features

### 📝 Note Management

* Create notes with a title and content
* Display notes dynamically
* Delete notes instantly
* Simple and intuitive note-taking interface

### 🌙 Theme Support

* Light Mode
* Dark Mode
* Instant theme switching
* Consistent styling across the application

### 🎨 User Interface

* Modern and minimal design
* Interactive hover effects
* Smooth UI animations
* Clean component-based layout

### 📱 Responsive Design

* Mobile-friendly interface
* Tablet support
* Desktop-friendly layout
* Responsive note presentation

### ⚛️ React Architecture

* Reusable React components
* Component-based application structure
* Separation of UI responsibilities
* React state and event handling

---

## 🛠️ Technology Stack

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **React.js**          | Frontend application development           |
| **Vite**              | Development environment and build tooling  |
| **JavaScript (ES6+)** | Application logic and interactivity        |
| **HTML5**             | Application structure                      |
| **CSS3**              | Styling, animations, and responsive design |
| **Git & GitHub**      | Version control and project management     |

---

## 🏗️ Application Architecture

The application follows a component-based React architecture.

```text
Keeper App
│
├── Header
│   ├── Application Title
│   └── Theme Toggle
│
├── CreateArea
│   ├── Note Title Input
│   ├── Note Content Input
│   └── Add Note Action
│
├── Notes
│   └── Note
│       ├── Title
│       ├── Content
│       └── Delete Action
│
└── Footer
    └── Application Information
```

---

## 📂 Project Structure

```text
keeper-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Note.jsx
│   │   └── CreateArea.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js**
* **npm**
* **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/keeper-app.git
```

### 2. Navigate to the Project

```bash
cd keeper-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

---

## 🧩 Core Components

### `Header.jsx`

Responsible for:

* Displaying the application branding
* Providing the Dark Mode / Light Mode toggle
* Handling theme-related UI interactions

### `CreateArea.jsx`

Responsible for:

* Accepting note title input
* Accepting note content
* Handling note creation
* Triggering the addition of new notes

### `Note.jsx`

Responsible for:

* Displaying individual notes
* Rendering note title and content
* Providing the delete functionality

### `Footer.jsx`

Responsible for:

* Displaying application footer information
* Providing basic application branding information

### `App.jsx`

Acts as the main application component and coordinates:

* Note rendering
* Note creation
* Note deletion
* Application state
* Component communication

---

## 🌙 Dark Mode

Keeper App includes a built-in theme system that allows users to switch between Light and Dark modes.

### Light Mode

Designed for a clean and minimal daytime experience.

### Dark Mode

Provides a darker interface that is more comfortable in low-light environments.

Users can switch between themes directly from the application header.

---

## 📸 Screenshots

🔹 Light Mode
<img width="611" height="300" alt="image" src="https://github.com/user-attachments/assets/4a346a65-212c-4c2b-a98e-c2c2f5184a04" />

🔹 Dark Mode
<img width="600" height="500" alt="image" src="https://github.com/user-attachments/assets/956b612c-a93f-476c-817a-3913a2a7afb2" />

---

## 🎯 Learning Objectives

This project was developed to gain practical experience with:

* React component development
* React state management
* Props and component communication
* Event handling
* Dynamic rendering
* Conditional UI behavior
* Responsive web design
* CSS animations and transitions
* Vite-based React development
* Git and GitHub workflow

---

## 🚀 Future Enhancements

The current application focuses on the core note-taking experience. Planned improvements include:

### 📝 Advanced Note Management

* Edit existing notes
* Pin important notes
* Archive notes
* Restore deleted notes

### 💾 Data Persistence

* Local Storage support
* Persistent notes between sessions
* Automatic note saving

### 🔍 Search & Organization

* Search notes
* Filter notes
* Sort notes
* Color-coded categories
* Tags and labels

### ☁️ Backend Integration

* REST API integration
* Database-backed note storage
* Cloud synchronization
* Cross-device access

### 🔐 Authentication

* User registration
* User login
* Protected user data
* Account-based note management

---

## 🔮 Future Architecture

With backend integration, the application can be extended into a full-stack note management platform:

```text
React Frontend
      │
      ▼
REST API
      │
      ▼
Backend Server
      │
      ▼
Database
```

Authentication and cloud synchronization can then be added to provide secure, persistent access across multiple devices.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

### Contribution Workflow

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Commit your changes
5. Push the branch
6. Create a Pull Request

Example:

```bash
git checkout -b feature/add-search
git add .
git commit -m "feat: add note search functionality"
git push origin feature/add-search
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgements

* Inspired by **Google Keep**
* Built with **React.js and Vite**
* Uses modern frontend development practices
* Developed as a practical React learning project

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a **⭐ star on GitHub**.

Your feedback and suggestions are always welcome.

---

**Built with ❤️ using React.js by Samni Hasnath**



nsider giving it a star on GitHub!
