
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-construction-blue to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-xl p-10 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Construction Projects?</h2>
              <p className="text-lg text-gray-200 mb-6">
                Our team of experts is ready to help you achieve your construction goals with precision, 
                efficiency and dedication. Let's build something amazing together.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="bg-construction-orange/20 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Comprehensive construction outsourcing solutions
                </li>
                <li className="flex items-center">
                  <span className="bg-construction-orange/20 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Tailored approach for your specific project needs
                </li>
                <li className="flex items-center">
                  <span className="bg-construction-orange/20 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Expert team with proven track record of success
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-construction-orange/50 transition-all">
                <h3 className="text-2xl font-semibold mb-4">Get a Free Consultation</h3>
                <p className="text-gray-300 mb-6">
                  Speak with our experts and discover how we can help with your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <Button 
                    className="bg-construction-orange hover:bg-red-600 text-white py-6 px-8 rounded-md transition-all transform hover:scale-105 pulse-border shine-button"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                </div>
                <p className="mt-4 text-sm text-gray-400">No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
