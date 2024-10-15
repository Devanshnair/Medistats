import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Herosection from './Herosection.jsx/Herosection'
import Websitesection from './Websitessection/Websitesection'
import Categorysection from './Categorysection/Categorysection'
import FeatureSection from './Featuresection/Featuresection'
import Footer from '../../Components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
    <Herosection />
    <Websitesection />
    <FeatureSection />
    <Categorysection />
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default LandingPage