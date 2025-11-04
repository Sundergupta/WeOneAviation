import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Components
import RootLayout from './components/RootLayout';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import DGCAComputerNumber from './screens/DGCA Computer Number';
import TrainingCards from './components/TrainingCards';
import DgcaMedical from './screens/dgca-class-2-class-1-medical';
import DgcaGroundClasses from './screens/dgca-ground-classes-in-india';
import CommercialPilotLicense from './screens/CommercialPilotLicense';
import MapPage from './screens/IndiaMap';
import Structure from './screens/full form';
import ICSE from './screens/ICSE';
import Eligibility from './screens/commercial-pilot-license-eligibility';
import CBSE from './screens/CBSE';
import Syllabus from './screens/commercial-pilot-license-syllabus';
import Admission from './screens/commercial-pilot-license-admission-process';
import DGCA from './screens/DGCA';
import PPL from './screens/PPL';
// import { fullFormOfCplCommercialPilotLicense } from "./screens/full-form-of-cpl-commercial-pilot-license";


// services pages 

import PilotTraining from "./screens/Services/PilotTraining";
// import CharteredServices from "./screens/Services/chartered-services";
import AircraftSalePurchase from "./screens/Services/AirCraftSalePurchase";
// import AirportGroundHandlingService from "./screens/Services/airport-ground-handling-service";
import AviationPlacementService from "./screens/Services/AviationPlacementService";
import AircraftManagement from "./screens/Services/AircraftManagement";
import AircraftSpareParts from "./screens/Services/AircraftSpareParts";
// import MroServices from "./screens/Services/mro-services";
// import SaleAndPurchaseAirplanes from "./screens/Services/sale-and-purchase-airplanes";
import ChattersServices from "./screens/Services/CharteredServices";
import AirplaneParts from "./screens/Services/AirCraftSalePurchase";




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
      // {  full form pages } 
      { path: 'Structur', element: <Structure /> },
      { path: 'cbse-full-form', element: <CBSE /> },
      { path: 'dgca-full-form', element: <DGCA /> },
      { path: 'icse-full-form', element: <ICSE /> },
      { path: 'commercial-pilot-license-salary', element: <CplSalary /> },
      { path: 'Map-training', element: <MapPage /> },
      { path: 'commercial-pilot-license-eligibility', element: <Eligibility /> },
      { path: 'commercial-pilot-license-syllabus', element: <Syllabus /> }, ,
      { path: 'commercial-pilot-license-admission-process', element: <Admission /> },
      { path: 'ppl-full-form', elementm: <PPL /> },
      // { path: 'fullformofcplcommercialpilotlicense', element: <fullFormOfCplCommercialPilotLicense /> },

      { path: 'pilot-training', element: <PilotTraining /> },
      // { path: 'chartered-services', element: <CharteredServices /> },
      { path: 'aircraft-sale-purchase', element: <AircraftSalePurchase /> },
      // { path: 'airport-ground-handling-service', element: <AirportGroundHandlingService /> },
      { path: 'aviation-placement-service', element: <AviationPlacementService /> },
      { path: 'aircraft-management', element: <AircraftManagement /> },
      { path: 'aircraft-spare-parts', element: <AircraftSpareParts /> },
      // { path: 'mro-services', element: <MroServices /> },
      // { path: 'sale-and-purchase-airplanes', element: <SaleAndPurchaseAirplanes /> },
      { path: 'chatters-services', element: <ChattersServices /> },
      { path: 'airplane-parts', element: <AirplaneParts /> },


      {
        path: 'CommercialPilotLicense',
        element: <CommercialPilotLicense />,

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
