
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesOverview from '@/components/ServicesOverview';
import Portfolio from '@/components/Portfolio';
import ServicesDetails from '@/components/ServicesDetails';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import ProcessSection from '@/components/ProcessSection';
import StatsCounter from '@/components/StatsCounter';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  useEffect(() => {
    // Initialize AOS library if it's in window object
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
    
    // Handle anchor link navigation
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    // Run on initial load and when hash changes
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="antialiased">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <ServicesOverview />
        <div id="design-planning"></div>
        <div id="estimation"></div>
        <div id="project-management"></div>
        <div id="support"></div>
      </div>
      <StatsCounter />
      <div id="about">
        <WhyChooseUs />
      </div>
      <ProcessSection />
      <ServicesDetails />
      <div id="portfolio">
        <Portfolio />
      </div>
      <CallToAction />
      <div id="clients">
        <Clients />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Index;
