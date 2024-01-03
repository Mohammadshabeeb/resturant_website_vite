import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/Appstore/Appstore'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"


  




const App = () => {

  React.useEffect(()=> {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);



  return (
   <>
     <Navbar />
     <Hero />
     <Services />
     <Banner />
     <AppStore />
     <Testimonial />
     <Footer />
   </>
  )
}

export default App