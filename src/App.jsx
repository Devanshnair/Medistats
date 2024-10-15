import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import About from './Pages/AboutUs/AboutUs'
import LandingPage from './Pages/Landing Page/LandingPage';
import MedicineLists from './Pages/MedicineLists/MedicineLists';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />} >
      <Route index element={<LandingPage />} />
      <Route path='home' element={<LandingPage />} />
      <Route path='explore' element={<MedicineLists />} >
        {/* <Route path={'details'} element={<MedicineDetils />} */}
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>Not Found</div>} />,
    </Route>
      </>
    ),
  );
  return <RouterProvider router={router} />;
}

export default App
