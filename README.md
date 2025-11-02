# 🏠 ALX Listing App

The **ALX Listing App** is a foundational project for creating an Airbnb-style property listing application.  
This milestone focuses on scaffolding the project using **Next.js, TypeScript, TailwindCSS, and ESLint** to establish a clean, scalable, and production-ready codebase.

---

## 📌 Project Goals

- Scaffold a modern Next.js application tailored for production.
- Implement **TypeScript** for type safety and maintainability.
- Configure **TailwindCSS** for responsive, accessible UI development.
- Enforce clean code practices with **ESLint**.
- Establish a reusable and organized folder structure.

---

## 🚀 Tech Stack

- [Next.js 13+](https://nextjs.org/) (Pages Router, no `src` directory)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

---

## 📂 Project Structure

```bash
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx         # Reusable Card component
│       └── Button.tsx       # Reusable Button component
├── constants/
│   └── index.ts             # Reusable constants (API URLs, UI text, etc.)
├── interfaces/
│   └── index.ts             # TypeScript interfaces (CardProps, ButtonProps, etc.)
├── pages/
│   ├── index.tsx            # Homepage entry point
│   ├── _app.tsx             # Custom App wrapper (global styles, providers)
│   └── _document.tsx        # Custom Document (HTML structure, meta tags)
├── public/
│   └── assets/              # Images and SVGs
├── styles/
│   └── globals.css          # Tailwind base, components, and utilities
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation


⚙️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev

4. Open in Browser

Go to 👉 http://localhost:3000