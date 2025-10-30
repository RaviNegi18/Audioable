# 🛍️ AudioAble — A Modern E-Commerce Experience Built from Scratch  

> **Note:** All screenshots are referenced from `./screenshots/ folder`.  
> Please check the `/screenshots` folder for a full visual preview.

---

## 🖼️ Preview

Here’s a quick look at the project 👇

![Homepage Screenshot](/src/screenshots/screenshot.png)


## 🚀 Overview  
**AudioAble** is a modern and minimal e-commerce web application built entirely from **scratch** — without using any external UI libraries like Chakra UI or Material UI.  
It’s built with **React**, **Context API**, and **useReducer**, providing a clean state management flow for cart, checkout, and product recommendations.

This project simulates a complete online shopping experience — from browsing products to checking out — with dynamic cart updates, responsive UI, and real-time billing.

---

## 🧠 Tech Stack
- ⚛️ **React.js**
- 🧩 **Context API + useReducer** (for state management)
- 🎨 **Tailwind CSS** (for styling)
- 🔄 **React Router DOM** (for navigation)
- 💾 **LocalStorage (optional)** — for persisting cart data

---

## 🧱 Features

### 🛒 Shopping Experience
- Browse featured and detailed products  
- Add / remove products from the cart  
- Dynamic price updates and quantity management  
- Checkout page with **billing summary (subtotal, shipping, VAT, total)**  

### 💳 Checkout System
- Displays item summary  
- Calculates total with taxes and shipping  
- "Thank You" page with order details  

### 🔁 State Management
- Cart handled using **Context API** and **useReducer**  
- No Redux or external store used — everything is **handcrafted**  

### 🧠 Smart UI
- Recommended products shown dynamically  
- Active navigation highlight for better UX  


### 💪 From Scratch
- No external UI library (no Chakra UI / Material UI / MUI)
- Custom-built modals, buttons, and layout
- Fully responsive layout made with **pure Tailwind CSS**

---

## 🖼️ Screenshots

### 🏠 Home Page  
![Home Page](/src/screenshots/screenshot.png)

### 🛍️ Product Listing  
![Products](/src/screenshots/products.png)

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/audioable.git

# Navigate to the project folder
cd audioable

# Install dependencies
npm install

# Start the development server
npm run dev
