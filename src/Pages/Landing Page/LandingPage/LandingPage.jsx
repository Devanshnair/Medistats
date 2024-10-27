import Herosection from '../Herosection.jsx/Herosection'
import Websitesection from '../Websitessection/Websitesection'
import FeatureSection from '../Featuresection/Featuresection'
import Footer from '../../../Components/Footer/Footer'
import PopularMedicines from '../Categorysection/Popularmedicines'

const LandingPage = () => {
  return (
    <>
    <Herosection />
    <Websitesection />
    <FeatureSection />
    <PopularMedicines />
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default LandingPage