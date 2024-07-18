

import Footer from "../../components/landing/Footer";
import Hero from "../../components/landing/Hero";
import Navbar from "../../components/landing/Navbar";
import Roadmap from "../../components/landing/Roadmap";
import Service from "../../components/landing/Service";
import Solution from "../../components/landing/Solution";






function Home() {
  
  return (
    <div className=" flex flex-col gap-3">
      
        <Navbar />
        <Hero />
        <Roadmap />
        <Solution />
        <Service />
        <Footer />
    </div>
  )
}

export default Home;