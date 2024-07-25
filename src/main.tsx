import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/landing/Home.tsx'
import Tracker, {loader as TrackerLoader} from './components/track/Tracker.tsx'


const theme = createTheme({
  /** Put your mantine theme override here */
});



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "track/:trackId",
        element: <Tracker />,
        loader: TrackerLoader,
      },
    ],

  },
  {
    path: "/about",
    element: <>About</>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(



  <React.StrictMode>
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
  </React.StrictMode>
  


 ,
)
