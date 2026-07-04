import React ,{useEffect}from 'react'
import './App.css';
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

  

    </div>
    </>
  );
}

export default App;
