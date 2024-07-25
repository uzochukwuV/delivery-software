

import Hero from "../../components/landing/Hero";

import Roadmap from "../../components/landing/Roadmap";
import Service from "../../components/landing/Service";
import Solution from "../../components/landing/Solution";







function Home() {
  
  return (
    <div className=" flex flex-col gap-3">
      
        
        <Hero />
        <Roadmap />
        <Solution />
        <Service />
      
        
    </div>
  )
}

export default Home;