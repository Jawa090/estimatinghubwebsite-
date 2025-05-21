
import { Check, Award, Clock, BarChart, Users, Building, Globe, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Check size={24} />,
      title: "Accuracy & Precision",
      description: "Our estimates are consistently within 2% of final project costs, ensuring reliable budgeting for your projects.",
      delay: 100
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Turnaround",
      description: "Get your detailed estimates in as little as 48 hours, allowing you to respond quickly to client needs.",
      delay: 200
    },
    {
      icon: <BarChart size={24} />,
      title: "Cost Savings",
      description: "Our clients report an average of 15% reduction in project costs through our optimized estimation process.",
      delay: 300
    },
    {
      icon: <Award size={24} />,
      title: "Certified Experts",
      description: "Work with certified professionals with over 15 years of industry experience in all types of construction projects.",
      delay: 400
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "95%", label: "Client Retention" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Expert Team Members" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-construction-orange font-medium uppercase tracking-wider mb-2 block" data-aos="fade-up">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue" data-aos="fade-up">
            EstimatingHub Advantage
          </h2>
          <div className="w-24 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We deliver unparalleled value to our clients through accurate estimates, industry expertise, 
            and dedication to your project's success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl md:text-4xl font-bold text-construction-blue mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 bg-white relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-construction-blue via-construction-orange to-construction-blue"></div>
              
              <div className="w-14 h-14 rounded-full bg-construction-blue/10 flex items-center justify-center text-construction-blue mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-construction-darkGray text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <span className="text-construction-orange font-medium uppercase tracking-wider mb-2 block">Our Commitment</span>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">
              Construction Outsourcing Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're not just another estimation service - we're your strategic partner committed to your success. Our team of certified professionals brings decades of experience to every project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Users className="h-6 w-6 text-construction-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Expert Team</h4>
                  <p className="text-sm text-gray-600">Qualified professionals with specialized expertise</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Building className="h-6 w-6 text-construction-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Industry Knowledge</h4>
                  <p className="text-sm text-gray-600">Deep understanding of construction standards</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Globe className="h-6 w-6 text-construction-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Global Experience</h4>
                  <p className="text-sm text-gray-600">Projects completed across multiple countries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Zap className="h-6 w-6 text-construction-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick turnaround without compromising quality</p>
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {["Customized service for every project type", "Dedicated support throughout your project lifecycle", "Transparent pricing with no hidden fees", "Continuous improvement through client feedback"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 text-construction-orange">
                    <Check size={18} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-construction-orange rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Excellence"
                className="rounded-lg shadow-xl w-full object-cover h-96 relative z-10"
              />
            </div>
            <div className="bg-construction-blue text-white p-4 rounded-lg absolute -bottom-6 left-6 z-20 shadow-xl">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-construction-orange" />
                <div>
                  <div className="text-sm">Certified Excellence</div>
                  <div className="text-xs opacity-70">ISO 9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
