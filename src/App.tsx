import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Technologies from './sections/Technologies';
import Team from './sections/Team';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Faq from './sections/Faq';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Technologies />
          <Team />
          <Projects />
          <Process />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
