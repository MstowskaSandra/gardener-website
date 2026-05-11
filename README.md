# 🌿 Modern Gardener Service Website

A professional, high-performance service website designed for a gardening business. Built with **React**, **Vite**, and **Tailwind CSS**, featuring smooth animations and a fully functional contact system.

## ✨ Features

- **Contact System**: Fully validated contact form integrated with **EmailJS** for direct client communication.
- **Interactive Elements**:
  - Scroll-triggered animations using **Framer Motion**.
  - Optimized image gallery with staggered reveal effects.
  - Reusable components (Buttons, Cards, Reveal wrappers).
  - **Modern UI/UX**: Responsive design with a nature-inspired color palette and polished typography.
  - **User Feedback**: Integrated **react-hot-toast** for non-blocking, stylish notifications during form submission.
- **Dynamic Navigation**: Custom `ScrollToTop` utility for seamless SPA transitions.
- **Performance**: Built with **Vite** for lightning-fast development and optimized production builds.

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS, Framer Motion
- **Icons:** React Icons
- **Form Handling:** EmailJS, Custom Validation Utils
- **Notifications:** react-hot-toast
- **Routing:** React Router DOM
- **Build Tool:** Vite

## 🎨 From Design to Code

This project followed a complete development lifecycle:
1. **Design Phase**: I personally designed the entire UI/UX in **Canva**, focusing on a modern, "organic" aesthetic that reflects the gardening industry.
2. **Development**: I translated the high-fidelity designs into a pixel-perfect React application, ensuring all layouts remained faithful to the original vision.

## 📝 Form Architecture & Logic

- **Uncontrolled Components**: Used `useRef` and `FormData` for efficient data handling without unnecessary re-renders.
- **Seamless Validation**: Logic-driven validation that checks the entire form upon submission to ensure a distraction-free user experience.
- **EmailJS Integration**: Direct frontend-to-email integration with custom success/error handling and submission loading states.

