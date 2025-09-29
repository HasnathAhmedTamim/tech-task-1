# Pixel-Perfect React Project

A responsive, pixel-perfect React application built with modern web technologies, featuring a complete plumbing services website with FAQ section, contact forms, and footer components.

## 🚀 Project Overview

This project demonstrates pixel-perfect implementation from Figma designs with exact specifications across all device breakpoints. Built using React + Vite with Tailwind CSS for styling.

## 🛠️ Tech Stack

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next generation frontend build tool for fast development
- **Tailwind CSS v4** - Utility-first CSS framework with exact pixel specifications
- **Inter Font** - Google Fonts integration for consistent typography
- **ESLint** - Code quality and consistency

## 📱 Features

### Responsive Design
- **Mobile First**: 0-768px (390px container)
- **Tablet**: 768px-1024px (768px container) 
- **Desktop**: 1280px+ (1600px container)
- **Full-width page layouts** with semantic HTML structure

### Components

#### 🤔 FAQ Section
- Interactive accordion functionality
- Exact specifications: 
  - Mobile: 390px×448px
  - Tablet: 768px×488px 
  - Desktop: 1600px×850px
- Transform and opacity properties implemented

#### 📞 Get In Touch Section
- Call-to-action with blue background (#0058FF)
- Responsive contact forms
- Exact specifications:
  - Mobile: 390px×300px
  - Tablet: 768px×358px
  - Desktop: 1600px×644px

#### 🦶 Footer Component
- Multi-section layout with services, links, and contact info
- Social media integration
- Exact specifications:
  - Mobile: 390px×776px (32px padding, 32px gap)
  - Tablet: 768px×631px (40px padding, 40px gap)
  - Desktop: 1600px×456px (complex padding: 120px top/sides, 60px bottom, 80px gap)

## 🎨 Design Implementation

- **Pixel-perfect accuracy** using Tailwind's bracket notation `[XXXpx]`
- **Semantic HTML** with `<section>` wrappers for proper page structure
- **Accessible design** with proper alt texts and ARIA labels
- **Hover effects** and smooth transitions
- **Typography consistency** with Inter font family and exact line heights

## 📂 Project Structure

```
src/
├── components/
│   ├── FAQSection.jsx       # Interactive FAQ accordion
│   ├── GetInTouchSection.jsx # Contact/CTA section
│   └── Footer.jsx           # Complete footer with all sections
├── assets/                  # Images and icons
├── App.jsx                  # Main application component
├── App.css                  # Application styles
├── index.css               # Global styles and Tailwind imports
└── main.jsx                # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HasnathAhmedTamim/tech-task-1.git
   cd tech-task-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Implementation Details

### Responsive Breakpoint Strategy
- Uses Tailwind's responsive prefixes (`md:`, `lg:`)
- Full-width containers with max-width constraints
- Proper semantic structure with `<section>` wrappers

### Exact Pixel Specifications
- All dimensions use Tailwind's bracket notation for precision
- Transform and opacity properties implemented as specified
- Consistent spacing and typography across all breakpoints

### Component Architecture
- Functional components with React hooks
- Clean, maintainable code structure
- Proper separation of concerns

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌟 Project Highlights

- ✅ **100% Pixel Perfect** - Exact implementation of Figma designs
- ✅ **Fully Responsive** - Optimized for all device sizes
- ✅ **Modern React** - Uses latest React 18 features
- ✅ **Performance Optimized** - Built with Vite for fast development and builds
- ✅ **Clean Code** - ESLint configured for code quality
- ✅ **Semantic HTML** - Proper page structure with accessibility in mind

## 📄 License

This project is part of a technical assessment demonstrating pixel-perfect React implementation skills.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
