
// import NavbarComponent from "./components/Navbar";
import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Products from "../components/Products";
import CarouselHero from "../components/CarouselHero";


function Home() {

  return (
    <div>
      <CarouselHero />
      <AboutUs />
      <CTA />
      <Products />
      <Testimonials />
    </div>
    
  )
}



export default Home


