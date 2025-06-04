
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Home } from 'lucide-react';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Services sections data
  const servicesSections = [
    { name: "Design & Planning", description: "Architectural design and project planning services", icon: "🏗️", id: "design-planning" },
    { name: "Estimation", description: "Cost estimation and budgeting services", icon: "📊", id: "estimation" },
    { name: "Project Management", description: "End-to-end project management solutions", icon: "📋", id: "project-management" },
    { name: "Support & Maintenance", description: "Post-construction support and maintenance", icon: "🔧", id: "support" }
  ];

  return <>
      {/* Top Bar with Contact Info */}
      <div className={`hidden lg:block bg-construction-blue text-white py-2 transition-all duration-300 ${scrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+(212) 450-7419</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>sales@estimatinghub.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri: 9AM - 5PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>876 70th street Brooklyn  NY 11228</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 pt-7">
          <div className="flex items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <img src="/lovable-uploads/0d18cc57-bb81-4f64-9666-a22d86046947.png" alt="Company Logo" className="h-10" />
            </div>
            
            {/* Navigation - Right side */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <a 
                      href="#home" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                      }}
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 flex items-center ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      {/* <Home className="h-4 w-4 mr-1" /> */}
                      Home
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={scrolled ? "bg-transparent text-construction-darkGray hover:bg-gray-100" : "bg-transparent text-white hover:bg-white/10"}>
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a 
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-construction-blue/20 to-construction-blue p-6 no-underline outline-none focus:shadow-md" 
                              href="#services"
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('services');
                              }}
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Our Services
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Comprehensive construction outsourcing solutions tailored to your needs
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {servicesSections.map((service) => (
                          <li key={service.id}>
                            <NavigationMenuLink asChild>
                              <a 
                                href={`#${service.id}`} 
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection('services');
                                  // Add a slight delay to ensure the services section is loaded
                                  setTimeout(() => {
                                    const serviceElement = document.getElementById(service.id);
                                    if (serviceElement) {
                                      serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                  }, 100);
                                }}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  <span className="mr-2">{service.icon}</span>
                                  {service.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a 
                      href="#about" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                      }}
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      About
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={scrolled ? "bg-transparent text-construction-darkGray hover:bg-gray-100" : "bg-transparent text-white hover:bg-white/10"}>
                      Portfolio
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a 
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-construction-blue/20 to-construction-blue p-6 no-underline outline-none focus:shadow-md" 
                              href="#portfolio"
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('portfolio');
                              }}
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Featured Projects
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Explore our latest construction outsourcing success stories
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a 
                              href="#portfolio" 
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('portfolio');
                              }}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Commercial</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Commercial construction outsourcing solutions
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a 
                              href="#portfolio" 
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('portfolio');
                              }}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Residential</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Residential construction outsourcing projects
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a 
                              href="#portfolio" 
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('portfolio');
                              }}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Industrial</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Industrial construction projects and facilities
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a 
                      href="#clients" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('clients');
                      }}
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      Clients
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a 
                      href="#testimonials" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('testimonials');
                      }}
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      Testimonials
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Contact us button - far right */}
              <Button 
                className={`ml-8 bg-construction-orange hover:bg-orange-600 transition-colors ${scrolled ? '' : 'shadow-lg'}`} 
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-3xl focus:outline-none" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className={scrolled ? "text-construction-darkGray" : "text-white"} /> : <Menu className={scrolled ? "text-construction-darkGray" : "text-white"} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors flex items-center" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </a>
                
                {/* Services with submenu in mobile view */}
                <div className="relative">
                  <a 
                    href="#services" 
                    className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors flex items-center justify-between" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    Services
                  </a>
                  <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                    {servicesSections.map((service) => (
                      <a 
                        key={service.id}
                        href={`#${service.id}`} 
                        className="block text-sm text-gray-600 hover:text-construction-orange" 
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('services');
                          setTimeout(() => {
                            const serviceElement = document.getElementById(service.id);
                            if (serviceElement) {
                              serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          }, 100);
                        }}
                      >
                        <span className="mr-2">{service.icon}</span> {service.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="#about" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  About
                </a>
                
                {/* Portfolio submenu in mobile */}
                <div className="relative">
                  <a 
                    href="#portfolio" 
                    className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors flex items-center justify-between" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('portfolio');
                    }}
                  >
                    Portfolio
                  </a>
                  <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                    <a 
                      href="#portfolio" 
                      className="block text-sm text-gray-600 hover:text-construction-orange" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('portfolio');
                      }}
                    >
                      Commercial
                    </a>
                    <a 
                      href="#portfolio" 
                      className="block text-sm text-gray-600 hover:text-construction-orange" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('portfolio');
                      }}
                    >
                      Residential
                    </a>
                    <a 
                      href="#portfolio" 
                      className="block text-sm text-gray-600 hover:text-construction-orange" 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('portfolio');
                      }}
                    >
                      Industrial
                    </a>
                  </div>
                </div>
                
                <a 
                  href="#clients" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('clients');
                  }}
                >
                  Clients
                </a>
                <a 
                  href="#testimonials" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('testimonials');
                  }}
                >
                  Testimonials
                </a>
                <Button 
                  className="bg-construction-orange hover:bg-orange-600 transition-colors w-full" 
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Us
                </Button>
              </nav>
            </div>
          </div>}
      </header>
    </>;
};

export default Header;
