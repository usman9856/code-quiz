# React + TypeScript + Vite Boilerplate

**Version:** 2.0.0  
_Last updated: July 11, 2025_

This boilerplate provides a ready-to-use setup for building React applications with TypeScript, Vite, Zustand (state management), Axios (HTTP client), Tailwind CSS, and basic route protection.

---

## Key Features

1. **Vite Integration**  
   Utilizes Vite for fast builds, efficient development, and HMR (Hot Module Replacement).

2. **React with Tailwind CSS**  
   Pre-configured Tailwind CSS setup for rapid UI development.

3. **Zustand State Management**  
   Lightweight and flexible state management with Zustand, featuring TypeScript support and dev tools integration.

4. **Axios HTTP Client**  
   Configured Axios instance with interceptors for request/response handling and error management.

5. **Modular Architecture**  
   Clean separation of concerns with dedicated folders for stores, services, and components.

6. **Layout Management**  
   Features a customizable layout system in the `layout/` folder, including `Layout.tsx` and `ProtectedRoute.tsx`.

7. **Route Protection**  
   Provides route protection using roles, demonstrated in `ProtectedRoute.tsx`.

8. **TypeScript Support**  
   Full TypeScript integration with proper type definitions for stores, API responses, and components.

9. **Developer Experience**  
   Includes ESLint, Prettier, and Zustand DevTools for enhanced development workflow.

---

## Folder Structure and File Purposes

The project uses a flexible and customizable folder structure. Below is the updated structure:

```
📁 Vite Setup Boiler Code/
├── 📄 .env.development        # Environment variables for development
├── 📄 .eslintrc.json         # ESLint configuration for code linting
├── 📄 .gitignore             # Ignored files for Git
├── 📄 .prettierrc            # Prettier configuration for formatting
├── 📄 eslint.config.js       # ESLint plugin configuration
├── 📄 index.html             # Main HTML entry point for Vite
├── 📄 LICENSE.txt            # Project license
├── 📁 node_modules/          # Node dependencies (ignored)
├── 📄 package-lock.json      # Lockfile for npm
├── 📄 package.json           # Project metadata and dependencies
├── 📁 public/                # Public assets
│   └── 📄 vite.svg          # Vite logo
├── 📄 README.md              # Project documentation
├── 📁 src/                   # Source code directory
│   ├── 📄 App.css           # Global app-specific CSS
│   ├── 📄 App.tsx           # Main App component
│   ├── 📁 assets/           # Static assets like images and icons
│   │   ├── 📁 icon/         # Icon files
│   │   ├── 📁 image/        # Image assets
│   │   ├── 📄 react.svg     # React logo
│   │   └── 📁 svg/          # SVG files
│   ├── 📁 components/       # Reusable components
│   │   └── 📁 users/        # User-specific components
│   │       ├── 📄 User.tsx  # Example user component
│   │       └── 📄 users.constants.ts # Constants for user module
│   ├── 📁 constants/        # Project-wide constants
│   │   ├── 📄 index.ts      # Shared constants
│   │   └── 📄 permissionsRole.ts # Role-based permissions
│   ├── 📄 index.css         # Global CSS imports
│   ├── 📁 layout/           # Layout and route protection components
│   │   ├── 📄 Layout.tsx    # Base layout component
│   │   └── 📄 ProtectedRoute.tsx # Route protection logic
│   ├── 📄 main.tsx          # Entry point for the React app
│   ├── 📁 services/         # API services using Axios
│   │   ├── 📄 index.ts      # Services barrel export
│   │   ├── 📄 apiService.ts # Base Axios configuration
│   │   └── 📄 userApi.ts    # User-specific API functions
│   ├── 📁 store/            # Zustand stores
│   │   ├── 📄 index.ts      # Stores barrel export
│   │   └── 📄 userStore.ts  # User state management
│   └── 📄 vite-env.d.ts     # TypeScript environment definitions
├── 📄 tailwind.config.js     # Tailwind CSS configuration
├── 📄 tsconfig.app.json      # TypeScript app-specific configuration
├── 📄 tsconfig.json          # TypeScript base configuration
├── 📄 tsconfig.node.json     # TypeScript node-specific configuration
└── 📄 vite.config.ts         # Vite configuration
```

---

## Dummy Users

The project includes predefined dummy users with different roles for testing but have been:

- **TOKEN_USER_1** Has full access to all routes and functionalities.
- **TOKEN_USER_2** Limited access based on role restrictions.
- **TOKEN_USER_3** Read-only access to certain routes.

You can find role definitions in `constants/permissionsRole.ts`.
