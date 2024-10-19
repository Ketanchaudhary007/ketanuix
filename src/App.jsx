import './App.css';

import Contact from './sections/Contact/Contact';
import QualificationSection from './sections/Education/Qualificationsection';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      
      <Hero />
      <Projects />
      <Skills />
      <QualificationSection />
      <Footer />
    </>
  );
}

export default App;
