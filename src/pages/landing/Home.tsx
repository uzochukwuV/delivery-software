
import { Button } from "@mantine/core";
import Hero from "../../components/landing/Hero";
import Navbar from "../../components/landing/Navbar";
import Roadmap from "../../components/landing/Roadmap";






function Home() {
  
  return (
    <div className=" flex flex-col gap-3">
      
        <Navbar />
        <Hero />
        <Roadmap />
    </div>
  )
}

export default Home;