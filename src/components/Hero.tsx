
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Clock, CheckCircle, Wrench, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Construction Outsourcing Excellence';
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-construction-blue">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/95 to-construction-blue/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
      </div>
      
      {/* Content - Positioned lower */}
      <div className="container mx-auto px-4 z-10 text-white mt-32 md:mt-32">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div className="mb-6 flex justify-center">
            <div className="inline-block bg-construction-orange/20 backdrop-blur-sm px-6 py-2 rounded-full border border-construction-orange/50 shadow-lg shadow-construction-orange/20 animate-pulse">
              <span className="text-sm font-medium text-white">Trusted by Industry Leaders</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed">
            Transforming construction projects with expert design, precise estimation, 
            efficient management, and dedicated support.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-12 text-sm md:text-base">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-construction-orange/20">
              <Award className="h-8 w-8 mb-2 mx-auto text-construction-orange" />
              <p>15+ Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-construction-orange/20">
              <TrendingUp className="h-8 w-8 mb-2 mx-auto text-construction-orange" />
              <p>98% Client Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-construction-orange/20">
              <Clock className="h-8 w-8 mb-2 mx-auto text-construction-orange" />
              <p>On-Time Delivery</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-construction-orange/20">
              <CheckCircle className="h-8 w-8 mb-2 mx-auto text-construction-orange" />
              <p>Quality Guaranteed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-construction-orange/20 hidden md:block">
              <Wrench className="h-8 w-8 mb-2 mx-auto text-construction-orange" />
              <p>Advanced Technology</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-construction-orange/20 hidden md:block">
              <Shield className="h-8 w-8 mb-2 mx-auto text-construction-orange" />
              <p>Certified Experts</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-construction-orange hover:bg-red-600 text-white text-lg py-6 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg shadow-construction-orange/30 btn-glow" 
              onClick={() => scrollToSection('services')} 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Explore Our Services
            </Button>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-construction-blue text-lg py-6 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg" 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-construction-blue">Welcome to Construction Outsourcing Excellence</DialogTitle>
                  <DialogDescription className="text-lg text-gray-500">
                    Discover how we transform construction projects worldwide
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 my-4 text-gray-700">
                  <div className="flex flex-col gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-xl font-semibold text-construction-blue mb-2">Our Vision</h3>
                      <p className="mb-4">
                        We envision a construction industry where processes are streamlined, efficient, and accessible 
                        to businesses of all sizes. Our outsourcing solutions bridge the gap between cutting-edge technology 
                        and traditional construction expertise.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-construction-orange mr-2" />
                          <span>Industry-leading expertise</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-construction-orange mr-2" />
                          <span>Advanced technology integration</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-construction-orange mr-2" />
                          <span>Cost-effective solutions</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-construction-orange mr-2" />
                          <span>24/7 professional support</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-construction-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-xl font-semibold text-construction-blue mb-2">Why Choose Us</h3>
                      <p className="mb-4">
                        With over 15 years in the industry, we've refined our processes to deliver 
                        unmatched quality and efficiency. Our team of certified professionals brings 
                        extensive knowledge to every project, ensuring excellence at every stage.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div className="text-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                          <div className="text-2xl font-bold text-construction-orange">500+</div>
                          <div className="text-sm">Projects Completed</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                          <div className="text-2xl font-bold text-construction-orange">98%</div>
                          <div className="text-sm">Client Satisfaction</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                          <div className="text-2xl font-bold text-construction-orange">35+</div>
                          <div className="text-sm">Countries Served</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button 
                      className="bg-construction-orange hover:bg-red-600 text-white py-2 px-6"
                      onClick={() => {
                        setIsDialogOpen(false);
                        scrollToSection('contact');
                      }}
                    >
                      Contact Us Today
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="mt-16 animate-bounce-slow">
            <a href="#services" className="inline-block border-2 border-white rounded-full p-3 hover:bg-white hover:text-construction-blue transition-colors hover:shadow-lg hover:shadow-construction-orange/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
