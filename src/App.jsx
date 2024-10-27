import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './Pages/AboutUs/AboutUs'
// import LandingPage from './Pages/Landing Page/LandingPage';
import MedicineLists from './Pages/MedicineLists/MedicineLists';
import MedicineDetails from './Pages/MedicineDetails/Medicinedetails';
import Login from './Pages/User/Login/Login';
import Signup from './Pages/User/Signup/Signup';
import { AuthProvider } from './Context/AuthProvider';
import LandingPage from './Pages/Landing Page/LandingPage/LandingPage';

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
      <RouterProvider router={router} />;
    </AuthProvider>
  )
}

export default App
