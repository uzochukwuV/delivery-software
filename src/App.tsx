

import './App.css'
import Footer from './components/landing/Footer'
import Navbar from './components/landing/Navbar'
import { Outlet } from "react-router-dom";





function App() {

  
  return (
    <>
      <div className="relative">
      <div className=" flex flex-col gap-3">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
       
      </div>
    </>
  )
}

export default App
