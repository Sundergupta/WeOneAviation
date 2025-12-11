import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";




// 
import Page from './pages/Page.jsx'

// 

// Components
import PageList from './screens/PageList';
import RootLayout from './components/RootLayout';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import DGCAComputerNumber from './screens/DGCA Computer Number';
import TrainingCards from './components/TrainingCards';
import DgcaMedical from './screens/dgca-class-2-class-1-medical';
import DgcaGroundClasses from './screens/dgca-ground-classes-in-india';
import CommercialPilotLicense from './screens/commercial-pilot-license';
import MapPage from './screens/IndiaMap';
import Structure from './screens/full form';
import ICSE from './screens/ICSE';
import Eligibility from './screens/commercial-pilot-license-eligibility';

import CBSE from './screens/CBSE';

import Syllabus from './screens/commercial-pilot-license-syllabus';
import Admission from './screens/commercial-pilot-license-admission-process';
import DGCA from './screens/DGCA';
import PPL from './screens/PPL';
import Cpl from './screens/Cpl';
// import rtrPage from './screens/rtr-full-form-meaning-importance-and-complete-guide';
import RtrPage from './screens/rtr-full-form-meaning-importance-and-complete-guide'
// import { fullFormOfCplCommercialPilotLicense } from "./screens/full-form-of-cpl-commercial-pilot-license";
import ContactUs from './components/ContactUs';
// import AdminPanel from './components/AdminPanel';
// states pages 
import IndiaPage from './screens/States/india/index.jsx';
import HyderabadPage from './screens/States/hyderabad/index.jsx';
import MumbaiPage from './screens/States/mumbai/index.jsx';
import ChennaiPage from './screens/States/chennai/index.jsx';
import BanglorePage from './screens/States/Banglore/index.jsx';
import KeralaPage from './screens/States/kerala/index.jsx';
import DelhiPage from './screens/States/Delhi/index.jsx';
import PunePage from './screens/States/pune/index.jsx';
import KolkataPage from './screens/States/kolkata/index.jsx';
import CoimbatorePage from './screens/States/coimbatore/index.jsx';
import GujaratPage from './screens/States/Gujarat/index.jsx';
import GoaPage from './screens/States/Goa/index.jsx';
import GurugramPage from './screens/States/Gurugram/index.jsx';
import tamilNaduPage from './screens/States/tamilNadu/index.jsx';
import RajasthanPage from './screens/States/rajasthan/index.jsx';
import HaryanaPage from './screens/States/haryana/index.jsx';
import PunjabPage from './screens/States/Punjab/index.jsx';
import AndhraPradesh from './screens/States/andhrapradesh/index.jsx';
import ArunachalPradeshPage from './screens/States/arunachalpradesh/index.jsx';
import AssamPage from './screens/States/assam/index.jsx';
import Bihar from './screens/States/Bihar/index.jsx';
import ChhattisgarhPage from './screens/States/chhattisgarh/index.jsx';
import HimachalPradeshPage from './screens/States/himachalPradeshData/index.jsx';
import NoidaPage from './screens/States/noida/index.jsx';
import GhaziabadPage from './screens/States/ghaziabad/index.jsx';
import NagpurPage from './screens/States/nagpur/index.jsx';
import MaharashtraPage from './screens/States/maharashtra/index.jsx';
import JaipurPage from './screens/States/Jaipur/index.jsx';
import TamilNaduPage from './screens/States/tamilNadu/index.jsx';
// services pages 
import PilotTraining from "./screens/Services/PilotTraining";
import CharteredServices from "./screens/Services/CharteredServices";
import AircraftSalePurchase from "./screens/Services//AirCraftSalePurchase";
// import GroundHandling from "./screens/Services/GroundHandlingService";
import AviationPlacement from "./screens/Services/AviationPlacementService";
import AircraftManagement from "./screens/Services/AircraftManagement";
import AircraftSpareParts from "./screens/Services/AircraftSpareParts";
// import AirplaneSalePurchase from "./screens/Services/AirplaneSalePurchase";
// import ChattersServices from "./screens/Services/ChattersServices";
// import AirplaneParts from "./screens/Services/AirplaneParts";

import AirNavigation from './screens/AirNavigation';

// states pages 
import India from './screens/States/india';
import StateStructure from './components/StateStructure'


import FloatingButton from './components/FloatingButtons';

// ✅ Import nested CPL pages
import CplSalary from './screens/commercial-pilot-license-salary';
// import CplCourse from './screens/CPL/CplCourse';
// import CplFees from './screens/CPL/CplFees';
// import CplIntro from './screens/salary';

// Optional auth routes
// import SignIn from './screens/SignIn';
// import SignUp from './screens/SignUp';

import AdminPanel from './Admin Panel/Dashboard';
import AddPage from './screens/AddPage';
import Pages from './screens/Pages'






const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about-Us', element: <AboutUs /> },
      { path: 'dgca-computer-number', element: <DGCAComputerNumber /> },
      { path: 'dgca-class-2-class-1-medical', element: <DgcaMedical /> },
      { path: 'DGCA-ground-classes-in-india', element: <DgcaGroundClasses /> },
      { path: 'DgcaGroundClasses', element: <DgcaGroundClasses /> },
      // {  full form pages } 
      { path: 'Structur', element: <Structure /> },
      // Admin Panel
      //SEO PAGES 
      {

        path: "/:slug", element: <Page />
      },


      { path: 'cbse-full-form', element: <CBSE /> },

      { path: 'dgca-full-form', element: <DGCA /> },
      { path: 'icse-full-form', element: <ICSE /> },
      { path: 'commercial-pilot-license-salary', element: <CplSalary /> },
      { path: 'Map-training', element: <MapPage /> },
      { path: 'commercial-pilot-license-eligibility', element: <Eligibility /> },
      { path: 'commercial-pilot-license-syllabus', element: <Syllabus /> }, ,
      { path: 'commercial-pilot-license-admission-process', element: <Admission /> },
      { path: 'ppl-full-form', element: <PPL /> },
      { path: 'full-form-of-cpl-commercial-pilot-license', element: <Cpl /> },
      // { path: 'fullformofcplcommercialpilotlicense', element: <fullFormOfCplCommercialPilotLicense /> },

      // {services}
      { path: 'pilot-training', element: <PilotTraining /> },
      { path: 'chartered-services', element: <CharteredServices /> },
      { path: 'aircraft-sale-purchase', element: <AircraftSalePurchase /> },
      // { path: 'airport-ground-handling-service', element: <GroundHandling /> },
      { path: 'aviation-placement-service', element: <AviationPlacement /> },
      { path: 'aircraft-management', element: <AircraftManagement /> },
      { path: 'aircraft-spare-parts', element: <AircraftSpareParts /> },
      // { path: 'sale-and-purchase-airplanes', element: <AirplaneSalePurchase /> },
      // { path: 'chatters-services', element: <ChattersServices /> },
      // { path: 'airplane-parts', element: <AirplaneParts /> },


      // { path: 'mro-services', element: <MroServices /> },
      // { path: 'sale-and-purchase-airplanes', element: <SaleAndPurchaseAirplanes /> },
      // { path: 'chatters-services', element: <ChattersServices /> },
      // { path: 'airplane-parts', element: <AirplaneParts /> },
      { path: 'Contact-Us', element: <ContactUs /> },
      // { path: 'admin-panel', element: <AdminPanel /> },
      { path: 'AirNavigation', element: <AirNavigation /> },
      { path: 'dgca-full-form', element: <DGCA /> },
      { path: 'rtr-full-form-meaning-importance-and-complete-guide', element: <RtrPage /> },
      // states routes
      { path: 'pilot-training-in-india', element: <India /> },
      { path: 'State-Structure', element: <StateStructure /> },
      // states pages 
      { path: 'pilot-training-in-india', element: <IndiaPage /> },
      { path: 'pilot-training-in-hyderabad', element: <HyderabadPage /> },
      { path: 'pilot-training-in-mumbai', element: <MumbaiPage /> },
      { path: 'pilot-training-in-chennai', element: <ChennaiPage /> },
      { path: 'pilot-training-in-bangalore', element: <BanglorePage /> },
      { path: 'pilot-training-in-kerala', element: <KeralaPage /> },
      { path: 'pilot-training-in-delhi', element: <DelhiPage /> },
      { path: 'pilot-training-in-pune', element: <PunePage /> },
      { path: 'pilot-training-in-kolkata', element: <KolkataPage /> },
      { path: 'pilot-training-in-coimbatore', element: <CoimbatorePage /> },
      { path: 'pilot-training-in-gujarat', element: <GujaratPage /> },
      { path: 'pilot-training-in-goa', element: <GoaPage /> },
      { path: 'pilot-training-in-gurugram', element: <GurugramPage /> },
      { path: 'pilot-training-in-tamilNadu', element: <tamilNaduPage /> },
      { path: 'pilot-training-in-rajasthan', element: <RajasthanPage /> },
      { path: 'pilot-training-in-haryana', element: <HaryanaPage /> },
      { path: 'pilot-training-in-punjab', element: <PunjabPage /> },
      { path: 'pilot-training-in-andhra-pradesh', element: <AndhraPradesh /> },
      { path: 'pilot-training-in-arunachal-pradesh', element: <ArunachalPradeshPage /> },
      { path: 'pilot-training-in-assam', element: <AssamPage /> },
      { path: 'pilot-training-in-bihar', element: <Bihar /> },
      { path: 'pilot-training-in-chhattisgarh', element: <ChhattisgarhPage /> },
      { path: 'pilot-training-in-himachal-pradesh', element: <HimachalPradeshPage /> },
      { path: 'pilot-training-in-noida', element: <NoidaPage /> },
      { path: 'pilot-training-in-ghaziabad', element: <GhaziabadPage /> },
      { path: 'pilot-training-in-nagpur', element: <NagpurPage /> },
      { path: 'pilot-training-in-maharashtra', element: <MaharashtraPage /> },
      { path: 'pilot-training-in-jaipur', element: <JaipurPage /> },
      { path: 'pilot-training-in-tamil-nadu', element: <TamilNaduPage /> },
      { path: "floating-button", element: <FloatingButton /> },

      {
        path: 'commercial-pilot-license',
        element: <CommercialPilotLicense />,
      },
    ],
  },






  { path: 'admin-panel', element: <AdminPanel /> },
  { path: 'add-page', element: <AddPage /> },
  { path: 'pages', element: <Pages /> },

  { path: 'page-list', element: <PageList /> },

  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  const user = useSelector((state) => state.user);
  console.log('Inside App', user);

  <ScrollRestoration />
  return <RouterProvider router={router} />;
}

export default App;
