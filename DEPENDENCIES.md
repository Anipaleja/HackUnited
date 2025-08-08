# Dependencies Documentation

## Project Overview
This is a React/TypeScript project using modern UI components and libraries.

## Installation
To install all dependencies, run:
```bash
npm install
```

## Dependencies Breakdown

### Core Framework
- **react** (^19.1.1) - Core React library
- **react-dom** (^19.1.1) - React DOM renderer

### UI Component Library
This project uses **Radix UI** as the headless component library foundation:
- `@radix-ui/react-*` - Complete set of accessible, unstyled UI primitives
- Components include: accordion, alert-dialog, avatar, button primitives, checkbox, dialog, dropdown-menu, form controls, navigation, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toggle, tooltip

### Styling & Design System
- **class-variance-authority** (^0.7.1) - Type-safe CSS-in-JS variant system
- **clsx** (^2.1.1) - Utility for constructing className strings conditionally
- **tailwind-merge** (^3.3.1) - Merge Tailwind CSS classes without style conflicts

### Enhanced UI Components
- **lucide-react** (^0.537.0) - Beautiful & consistent icon library
- **cmdk** (^1.1.1) - Fast, composable, unstyled command menu
- **embla-carousel-react** (^8.6.0) - Lightweight carousel library
- **input-otp** (^1.4.2) - OTP (One-Time Password) input component
- **react-day-picker** (^9.8.1) - Flexible date picker component
- **react-hook-form** (^7.62.0) - Performant forms with easy validation
- **react-resizable-panels** (^3.0.4) - Resizable panel components
- **recharts** (^3.1.2) - Composable charting library built on React components
- **sonner** (^2.0.7) - Opinionated toast component
- **vaul** (^1.1.2) - Drawer component
- **next-themes** (^0.4.6) - Theme switching functionality

### Development Dependencies
- **@types/react-day-picker** (^5.2.1) - TypeScript definitions

## Architecture Notes
- All UI components are built using shadcn/ui patterns
- Components are styled with Tailwind CSS
- The design system uses Radix UI primitives for accessibility
- TypeScript is used throughout for type safety

## Component Structure
```
components/
├── ui/          # Reusable UI components (buttons, inputs, etc.)
├── figma/       # Figma-exported components
└── hero.tsx     # Landing page hero component
```

