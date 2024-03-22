import React from 'react'
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden text-white'>
    <ToastContainer />

      <Header />
    <Home />
    <About/>
    <Work />
    <Projects />
    <Contact/>  
    <Footer/>
    {/* <div className='h-[4000px]'>

    </div> */}

    </div>
    </>
  );
}

export default App;
