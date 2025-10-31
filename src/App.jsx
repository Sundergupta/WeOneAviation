import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Components
import RootLayout from './components/RootLayout';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import DGCAComputerNumber from './screens/DGCA Computer Number';
import TrainingCards from './components/TrainingCards';
import DgcaMedical from './screens/DGCA-class-2-class-1-medical';
import DgcaGroundClasses from './screens/dgca-ground-classes-in-india';
import CommercialPilotLicense from './screens/CommercialPilotLicense';
import MapPage from './screens/IndiaMap';
import Structure from './screens/full form';
import ICSE from './screens/ICSE';
import Eligibility from './screens/commercial-pilot-license-eligibility';
import CBSE from './screens/CBSE';


// ✅ Import nested CPL pages
import CplSalary from './screens/commercial-pilot-license-salary';
// import CplCourse from './screens/CPL/CplCourse';
// import CplFees from './screens/CPL/CplFees';
// import CplIntro from './screens/salary';

// Optional auth routes
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
      { path: 'Structur', element: <Structure /> },
      { path: 'CBSE', element: <CBSE /> },

      { path: 'ICSE', element: <ICSE /> },
      { path: 'commercial-pilot-license-salary', element: <CplSalary /> },
      { path: 'pilot-training', element: <MapPage /> },
      { path: 'commercial-pilot-license-eligibility', element: <Eligibility /> },
      // ✅ CPL Section with nested routes
      {
        path: 'CommercialPilotLicense',
        element: <CommercialPilotLicense />,
        children: [
          { path: 'commercial-pilot-license-eligibility', element: <Eligibility /> },
          // { path: 'course', element: <CplCourse /> },
          // { path: 'fees', element: <CplFees /> },
          { path: 'commercial-pilot-license-salary', element: <CplSalary /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  const user = useSelector((state) => state.user);
  console.log('Inside App', user);

  return <RouterProvider router={router} />;
}

export default App;
