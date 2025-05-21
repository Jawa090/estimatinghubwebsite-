
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Office Building",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
      description: "Complete office building estimation and project management"
    },
    {
      id: 2,
      title: "Luxury Apartment Complex",
      category: "residential",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=2070&auto=format&fit=crop",
      description: "Full-service estimation for multi-unit residential development"
    },
    {
      id: 3,
      title: "Shopping Mall Renovation",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop",
      description: "Cost estimation and project planning for mall renovation"
    },
    {
      id: 4,
      title: "Suburban Homes Project",
      category: "residential",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
      description: "Estimation services for 50-home suburban development"
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop",
      description: "Complete estimation for 100,000 sq ft industrial facility"
    },
    {
      id: 6,
      title: "Highway Infrastructure",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2070&auto=format&fit=crop",
      description: "Cost estimation for major highway expansion project"
    },
  ];

  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue" data-aos="fade-up">
            Our Project Portfolio
          </h2>
          <div className="w-24 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Browse through our completed estimation and construction outsourcing projects
            spanning commercial, residential, and infrastructure developments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {["all", "commercial", "residential", "industrial", "infrastructure"].map((filter) => (
            <Button 
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`capitalize ${activeFilter === filter ? 'bg-construction-blue text-white' : 'text-construction-darkGray'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay={(item.id % 3) * 100}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-construction-orange uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-construction-darkGray mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-construction-blue hover:text-construction-orange transition-colors font-medium"
                >
                  View Project Details
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-construction-blue text-center mb-8">Featured Projects</h3>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioItems.slice(0, 3).map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-lg text-construction-darkGray mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
