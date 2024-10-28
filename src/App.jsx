import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './Pages/AboutUs/AboutUs'
import MedicineLists from './Pages/ExploreMedicines/ExploreMedicines';
import MedicineDetails from './Pages/MedicineDetails/Medicinedetails';
import Login from './Pages/User/Login/Login';
import Signup from './Pages/User/Signup/Signup';
import { AuthProvider } from './Context/AuthProvider';
import LandingPage from './Pages/Landing Page/LandingPage/LandingPage';
import SearchResults from './Pages/SearchMedicines/SearchMedicines';
import { PrefetchProvider } from './Context/PrefetchedContext';

export const baseURL = "https://real-pleasantly-grizzly.ngrok-free.app";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />} >
      <Route index element={<LandingPage />} />
      <Route path='home' element={<LandingPage />} />
      <Route path='explore' element={<MedicineLists />} />
      <Route path='details/:medicinename' element={<MedicineDetails />} />
      <Route path='search/:medicinename' element={<SearchResults />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>Not Found</div>} />,
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
      </>
    ),
  );
  return (
    <AuthProvider>
      <PrefetchProvider>
        <RouterProvider router={router} />;
      </PrefetchProvider>
    </AuthProvider>
  )
}

export default App
