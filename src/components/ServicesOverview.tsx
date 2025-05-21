
import { BrainCircuit, Lightbulb, Users, LifeBuoy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesOverview = () => {
  const services = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Design & Planning",
      description: "Expert architectural planning and design services that lay the foundation for successful construction projects.",
      bgClass: "design-icon-bg",
      delay: 100,
      features: ["3D Modeling", "Blueprint Creation", "Site Planning", "Regulatory Compliance"],
      sectionId: "design"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Cost Estimation",
      description: "Precise cost estimation services with 98% accuracy, ensuring your projects stay on budget from start to finish.",
      bgClass: "estimation-icon-bg",
      delay: 200,
      features: ["Quantity Takeoffs", "Material Costing", "Labor Estimates", "Equipment Allocation"],
      sectionId: "estimation"
    },
    {
      icon: <Users size={40} />,
      title: "Project Management",
      description: "Comprehensive project management solutions delivered by certified professionals with industry expertise.",
      bgClass: "management-icon-bg",
      delay: 300,
      features: ["Schedule Optimization", "Resource Coordination", "Progress Tracking", "Change Management"],
      sectionId: "management"
    },
    {
      icon: <LifeBuoy size={40} />,
      title: "Technical Support",
      description: "Ongoing technical support and consultation services to ensure smooth execution and timely completion.",
      bgClass: "support-icon-bg",
      delay: 400,
      features: ["24/7 Assistance", "Issue Resolution", "Technical Consulting", "Process Improvement"],
      sectionId: "support"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    // First scroll to the services details section
    const servicesDetailsSection = document.getElementById('services-details');
    if (servicesDetailsSection) {
      window.scrollTo({
        top: servicesDetailsSection.offsetTop - 100,
        behavior: 'smooth'
      });
      
      // Then trigger click on the tab
      setTimeout(() => {
        const tabElement = document.querySelector(`[value="${sectionId}"]`) as HTMLElement;
        if (tabElement) {
          tabElement.click();
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-construction-orange font-medium uppercase tracking-wider mb-2 block" data-aos="fade-up">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue" data-aos="fade-up">
            Construction Outsourcing Services
          </h2>
          <div className="w-24 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We provide comprehensive construction outsourcing services to help you build better, 
            faster, and more efficiently with our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-t-4 border-t-transparent hover:border-t-construction-orange"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="h-3 bg-gradient-to-r from-construction-blue via-construction-lightBlue to-construction-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-8">
                <div className={`${service.bgClass} hover:scale-110 transition-transform duration-300 group-hover:bg-opacity-100`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-poppins font-semibold my-4 text-construction-darkGray text-center group-hover:text-construction-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-construction-orange mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <button 
                    onClick={() => scrollToSection(service.sectionId)}
                    className="inline-block text-construction-blue font-medium hover:text-construction-orange transition-colors relative group cursor-pointer"
                  >
                    Learn More 
                    <span className="ml-1 group-hover:ml-2 transition-all duration-300">&rarr;</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-construction-orange group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-construction-blue hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
