# Milestone 1: Scaffolding and Initial Setup for Listing Page

## About the Project

The **ALX Listing App** project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

---

## Learning Objectives

This milestone is designed for professional developers to strengthen their expertise in modern web application development. By completing this milestone, learners will:

- Gain hands-on experience scaffolding a Next.js project tailored for production readiness.
- Implement TypeScript for type safety and reusable interfaces to enhance code maintainability and robustness.
- Configure TailwindCSS for building responsive, accessible, and visually appealing UI components.
- Structure a Next.js project following industry-standard best practices, ensuring scalability and readability.
- Create foundational reusable components and organize assets effectively for real-world applications.

---

## Requirements

### Prerequisites

To successfully complete this milestone, learners must have:

- Basic knowledge of Next.js, React, and TypeScript.
- Familiarity with TailwindCSS and modern styling techniques.
- Understanding of ESLint and its role in maintaining code quality.
- Proficiency in organizing and structuring projects for scalability.

### Technical Requirements

- Next.js version **15+**
- Node.js version **16+**
- TailwindCSS version **4**
- Text editor (e.g., **VS Code**) with TypeScript and TailwindCSS extensions installed

---

## Key Highlights

### Project Setup

- Scaffold a Next.js application named `alx-listing-app` with TypeScript, ESLint, and TailwindCSS enabled.
- Configure TailwindCSS using a minimal and clean configuration (`tailwind.config.js` and `globals.css`).

### Folder Structure and Reusability

- Establish a clean folder structure, including directories for:
  - `components/`
  - `interfaces/`
  - `constants/`
  - `public/assets/`
- Create reusable components such as `Card` and `Button`.

### TypeScript Integration

- Define TypeScript interfaces (`CardProps`, `ButtonProps`, etc.) in `interfaces/index.ts` for type safety and consistency.

### Asset Management

- Organize images and SVGs under `public/assets/` for easy access and maintainability.

### Documentation and Run Instructions

- Create a comprehensive `README.md` file with project details, folder structure explanation, and local setup instructions.
- Verify local setup by running the application and confirming all configurations work properly.

---

## Tasks

### 0. Create Project Structure and Integrate Key Tools in Next.js App

**Objective:**  
Scaffold the Airbnb clone project with a basic Next.js app, proper folder structure, TypeScript integration, and essential configurations.

### Instructions

#### Create the Next.js App

Run the following command:

```bash
npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir
