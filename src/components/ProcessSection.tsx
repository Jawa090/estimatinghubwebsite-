
import { CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with understanding your project requirements, goals, and constraints through detailed discussions.",
      highlights: ["Project scope definition", "Budget expectations", "Timeline assessment"]
    },
    {
      number: "02",
      title: "Project Analysis",
      description: "Our team analyzes the project specifications, conducts site assessments, and identifies potential challenges.",
      highlights: ["Technical feasibility study", "Risk assessment", "Regulatory compliance check"]
    },
    {
      number: "03",
      title: "Detailed Planning",
      description: "We create comprehensive plans including design drawings, material specifications, and detailed schedules.",
      highlights: ["Material selection", "Resource allocation", "Schedule development"]
    },
    {
      number: "04",
      title: "Execution & Delivery",
      description: "Our experts manage the execution phase with precision, ensuring quality standards are maintained throughout.",
      highlights: ["Quality assurance", "Progress monitoring", "Client communications"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-construction-orange font-medium uppercase tracking-wider mb-2 block" data-aos="fade-up">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue" data-aos="fade-up">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Our structured approach ensures consistent results and exceptional quality across all projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 relative border-b-4 border-transparent hover:border-construction-orange transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-construction-blue text-white flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div className="pt-6 pb-4">
                <h3 className="text-2xl font-bold text-construction-darkGray mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-construction-orange mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-white via-construction-orange to-white absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border border-gray-200" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-4">Benefits of Our Structured Process</h3>
              <p className="text-gray-600 mb-6">
                Our systematic approach to construction outsourcing has been refined over 15 years of industry experience, 
                resulting in consistent, high-quality deliverables for our clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-construction-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-construction-orange" />
                  </div>
                  <span className="text-gray-700">Predictable outcomes and timelines</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-construction-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-construction-orange" />
                  </div>
                  <span className="text-gray-700">Transparent communication throughout</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-construction-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-construction-orange" />
                  </div>
                  <span className="text-gray-700">Minimized risks and potential issues</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-construction-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-construction-orange" />
                  </div>
                  <span className="text-gray-700">Continuous quality assurance at every step</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-construction-orange rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=2071&auto=format&fit=crop" 
                alt="Construction Process" 
                className="rounded-lg shadow-xl w-full h-full object-cover z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
