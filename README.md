# React Project Structure

This is a React-based web application with a structured component architecture and training data management.

## 📁 Project Structure

```
├── node_modules/          # Project dependencies
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/           # Images, fonts, and other static assets
│   ├── components/       # Reusable React components
│   │   ├── Data/         # Data management
│   │   │   └── JS trainingData.js  # Training data configuration
│   │   ├── Footer/       # Footer component
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── NavBar/       # Navigation bar component
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── RootLayout/   # Main layout wrapper
│   │   │   └── index.jsx
│   │   └── TrainingCards/ # Training cards display component
│   │       ├── index.jsx
│   │       └── style.css
│   ├── screens/          # Page-level components
│   │   ├── Home/         # Home page
│   │   ├── Signlr/       # Sign-in page
│   │   └── SignUp/       # Sign-up page
│   ├── store/            # State management (Redux/Zustand)
│   ├── App.css           # Main application styles
│   ├── App.jsx           # Root application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── .gitignore           # Git ignore rules
└── eslint.config.js     # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features

- **Responsive Design** - Mobile-first approach with CSS modules
- **Component-Based Architecture** - Reusable and maintainable components
- **Training Data Management** - Centralized training data configuration
- **Authentication Screens** - Sign-in and Sign-up functionality
- **State Management** - Integrated store for global state

## 📦 Key Components

### Layout Components
- **RootLayout** - Main application layout wrapper
- **NavBar** - Navigation header with menu items
- **Footer** - Page footer with links and information

### Feature Components
- **TrainingCards** - Display training programs or courses
- **Home** - Landing page component
- **Signlr/SignUp** - Authentication pages

### Data Management
- **trainingData.js** - Contains training program data and configurations

## 🎨 Styling

- CSS modules for component-specific styles
- Global styles in `index.css`
- Component-specific styles in respective `style.css` files

## 🔧 Configuration

- **ESLint** - Code linting configuration in `eslint.config.js`
- **Git** - Version control ignore rules in `.gitignore`

## 📱 Pages & Routing

The application includes the following main screens:
- Home (`/`)
- Sign In (`/signin`)
- Sign Up (`/signup`)

## 🗂️ State Management

The `store/` directory suggests integration with state management solutions like Redux or Zustand for global state handling.

## 🔒 Environment Setup

Make sure to set up any required environment variables for:
- API endpoints
- Authentication services
- Feature flags

## 📄 License

This project is licensed under the MIT License.

---

*For detailed component documentation, refer to individual component README files within each component directory.*