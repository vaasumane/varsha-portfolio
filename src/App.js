import React ,{useEffect}from 'react'
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header';
import SecondSection from './Components/AboutSection';
import AOS from "aos";
import "aos/dist/aos.css";
import WorkSection from './Components/WorkSection';
import SkillsSection from './Components/SkillsSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import HeaderSection from './Components/HeaderSection';
import HeroSection from './Components/HeroSection';
import ExperienceSection from './Components/ExperienceSection';
// import { ToastContainer } from 'react-toastify';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden text-white'>
      <HeaderSection />
      <HeroSection />
      <SecondSection />
      <ExperienceSection />
      <WorkSection />
      <SkillsSection  />
      <ContactSection />
      <FooterSection />
{/*     

      <Header />
    <Home />
    <About/>
    <Work />
    <Projects />
    <Contact/>  
    <Footer/> */}
  

    </div>
    </>
  );
}

export default App;
