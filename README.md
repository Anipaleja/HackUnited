# UnitedHacks

A modern React application built with TypeScript and cutting-edge UI components, featuring a comprehensive design system and accessible user interface components.

## Overview

UnitedHacks is a full-featured React application that demonstrates best practices in modern web development. The project utilizes a robust component architecture with Radix UI primitives, Tailwind CSS styling, and TypeScript for type safety.

## Features

- **Modern React Architecture**: Built with React 19 and TypeScript for robust type safety
- **Comprehensive UI Components**: Complete set of accessible UI components using Radix UI primitives
- **Design System**: Consistent styling with Tailwind CSS and class-variance-authority
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessibility**: Full keyboard navigation and screen reader support
- **Dark/Light Theme**: Theme switching functionality with next-themes
- **Form Handling**: Advanced form management with react-hook-form
- **Data Visualization**: Interactive charts and graphs with Recharts
- **Icon Library**: Beautiful icons from Lucide React

## Tech Stack

### Core Technologies
- **React** 19.1.1 - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Libraries
- **Radix UI** - Headless, accessible component primitives
- **shadcn/ui** - Re-usable component patterns
- **Lucide React** - Beautiful & consistent icons
- **Recharts** - Composable charting library

### Development Tools
- **class-variance-authority** - Type-safe variant system
- **clsx & tailwind-merge** - Conditional className utilities
- **react-hook-form** - Performant form library

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anipaleja/UnitedHacks.git
   cd UnitedHacks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
UnitedHacks/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── chart.tsx
│   │   └── ...
│   ├── figma/           # Figma-exported components
│   └── hero.tsx         # Hero section component
├── styles/
│   └── globals.css      # Global styles and Tailwind directives
├── app.tsx              # Main application component
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## Component Library

The project includes a comprehensive set of UI components:

- **Form Controls**: Button, Input, Textarea, Checkbox, Radio Group, Select, Switch
- **Layout**: Card, Separator, Aspect Ratio, Scroll Area
- **Navigation**: Accordion, Breadcrumb, Navigation Menu, Tabs, Pagination
- **Overlay**: Dialog, Alert Dialog, Popover, Tooltip, Sheet, Drawer
- **Feedback**: Alert, Progress, Skeleton, Sonner (Toast)
- **Data Display**: Table, Avatar, Badge, Calendar, Chart
- **Utilities**: Command Menu, Resizable Panels, Carousel

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React functional component patterns
- Implement proper prop typing with TypeScript interfaces
- Use CSS classes with Tailwind utilities

### Component Development
- Build components using Radix UI primitives when possible
- Ensure accessibility compliance (ARIA labels, keyboard navigation)
- Implement responsive design patterns
- Use the established design tokens and color system

### Best Practices
- Write self-documenting code with clear prop interfaces
- Implement proper error handling and loading states
- Follow React performance optimization patterns
- Maintain consistent component API patterns

## Dependencies

For a complete list of dependencies and their purposes, see [DEPENDENCIES.md](./DEPENDENCIES.md).

### Key Dependencies
- React ecosystem (react, react-dom)
- Radix UI component primitives
- Tailwind CSS and utility libraries
- Form and data visualization libraries
- Development and type definition packages

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Component patterns inspired by [shadcn/ui](https://ui.shadcn.com/)