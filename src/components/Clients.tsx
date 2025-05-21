
import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Clients = () => {
  const clientLogos = [
    { 
      name: "TechBuild Construction", 
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&auto=format&fit=crop&q=80"
    },
    { 
      name: "Innovate Developers", 
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&auto=format&fit=crop&q=80" 
    },
    { 
      name: "PrimeArch Solutions", 
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&auto=format&fit=crop&q=80" 
    },
    { 
      name: "StructureX Corp", 
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&auto=format&fit=crop&q=80" 
    },
    { 
      name: "BuildTech Enterprises", 
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Foundation Partners", 
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&auto=format&fit=crop&q=80" 
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="clients" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-construction-orange font-medium uppercase tracking-wider mb-2 block bg-red-50 py-1 px-4 rounded-full inline-block shadow-sm" data-aos="fade-up">Partnerships</span>
          <h2 className="text-3xl font-poppins font-bold mb-3 text-gray-800" data-aos="fade-up">
            Our Trusted Clients
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We've had the privilege of working with industry leaders across the construction sector
          </p>
        </div>

        <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
          {/* Gradient overlay for seamless scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            ref={scrollContainerRef}
            className="flex items-center space-x-8 overflow-x-scroll scrollbar-none py-8"
          >
            {/* Double the client logos to create infinite scroll effect */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 transition-all hover:scale-105 duration-300 shadow-lg overflow-hidden border border-gray-200 hover:border-red-400 group"
              >
                <AspectRatio ratio={16/9} className="w-[280px] sm:w-[320px]">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-3 bg-white group-hover:bg-red-50 transition-colors">
                  <h3 className="font-medium text-sm text-center text-gray-800 group-hover:text-construction-orange transition-colors">{client.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
