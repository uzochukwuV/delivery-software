
import { Suspense } from 'react';
import './App.css'
import Home from './pages/landing/Home';





function App() {

  
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
