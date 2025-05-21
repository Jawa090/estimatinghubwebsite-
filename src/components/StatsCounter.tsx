
import { useState, useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  description: string;
  duration?: number;
}

const StatCounter = ({ value, suffix, description, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = Math.min(value, 9999);
    const incrementTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(Math.min(start, end));
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-construction-blue mb-2">
        {count}
        <span className="text-construction-orange">{suffix}</span>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-construction-orange font-medium uppercase tracking-wider mb-2 block bg-red-50 py-1 px-4 rounded-full inline-block shadow-sm" data-aos="fade-up">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue" data-aos="fade-up">
            The Numbers Speak For Themselves
          </h2>
          <div className="w-24 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Our track record of success across numerous construction outsourcing projects demonstrates our commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-construction-orange float-shadow" data-aos="fade-up" data-aos-delay="100">
            <StatCounter value={500} suffix="+" description="Projects Completed" />
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-construction-orange float-shadow" data-aos="fade-up" data-aos-delay="200">
            <StatCounter value={95} suffix="%" description="Client Retention Rate" />
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-construction-orange float-shadow" data-aos="fade-up" data-aos-delay="300">
            <StatCounter value={32} suffix="M" description="Square Feet Built" />
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500 border-t-4 border-construction-orange float-shadow" data-aos="fade-up" data-aos-delay="400">
            <StatCounter value={42} suffix="" description="Countries Served" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
