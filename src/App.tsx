
import { Suspense, useLayoutEffect } from 'react';
import './App.css'
import Home from './pages/landing/Home';



function App() {

  
  // console.log(new Date(Date.now()).getSeconds())
 useLayoutEffect(() => {
  //  console.log(new Date(Date.now()).getSeconds())
 
   return () => {
     
   };
 }, [])

  return (
    <>
      <div className="relative">
        <Suspense fallback={<div className=' text-6xl text-blue-800'>Loading ....</div>}>
          <Home />
        </Suspense>
      </div>
    </>
  )
}

export default App
