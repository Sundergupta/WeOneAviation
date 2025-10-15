import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import RootLayout from './components/RootLayout';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import DGCAComputerNumber from './screens/DGCA Computer Number';
import TrainingCards from './components/TrainingCards';
import DgcaMedical from './screens/DGCA-class-2-class-1-medical';
import DgcaGroundClasses from './screens/dgca-ground-classes-in-india';

// Optional: Uncomment when you create these screens
// import SignIn from './screens/SignIn';
// import SignUp from './screens/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'AboutUs', element: <AboutUs /> },
      { path: 'dgca-computer-number', element: <DGCAComputerNumber /> },
      { path: 'dgca-class-2-class-1-medical', element: <DgcaMedical /> },
      { path: 'DGCA-ground-classes-in-india', element: <DgcaGroundClasses /> },
      { path: 'DgcaGroundClasses', element: <DgcaGroundClasses /> },
      // Add other nested routes if needed
    ],
  },
  // Optional public routes (like auth)
  {
    path: '/',
    children: [
      // { path: 'sign-in', element: <SignIn /> },
      // { path: 'sign-up', element: <SignUp /> },
    ],
  },
  // Redirect any unknown route (optional)
  // { path: '*', element: <Navigate to="/sign-in" replace /> },
]);

function App() {
  const user = useSelector((state) => state.user);
  console.log('Inside App', user);

  return <RouterProvider router={router} />;
}

export default App;
