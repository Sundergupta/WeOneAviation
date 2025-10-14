import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RootLayout from './components/RootLayout'
import Home from './screens/Home'
import TrainingCards from './components/TrainingCards';
import AboutUs from './screens/AboutUs';

// import SignIn from './screens/SignIn' // placeholder path — create if missing
// import SignUp from './screens/SignUp' // placeholder path — create if missing

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "training-cards",
        element: <TrainingCards />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },

    ],
  },
  {
    path: "/",
    children: [
      // {
      //   path: "sign-in",
      //   element: <SignIn />,
      // },

      // {
      //   path: "sign-up",
      //   element: <SignUp />,
      // },
    ],
  },
  // {
  //   path: "*",
  //   element: <Navigate to={"/sign-in"} replace />,
  // },
]);

function App() {
  const user = useSelector((state) => state.user)
  console.log("Inside App ", user)
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

