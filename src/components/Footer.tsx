
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-darkGray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/0d18cc57-bb81-4f64-9666-a22d86046947.png" alt="Company Logo" className="h-10" />
             
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for construction outsourcing services. We help you build better, faster, and more efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#design" className="text-gray-300 hover:text-construction-orange transition-colors">Design Services</a>
              </li>
              <li>
                <a href="#estimation" className="text-gray-300 hover:text-construction-orange transition-colors">Estimation Services</a>
              </li>
              <li>
                <a href="#management" className="text-gray-300 hover:text-construction-orange transition-colors">Management Services</a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-construction-orange transition-colors">Support Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">Training & Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">Consulting Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-construction-orange transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-construction-orange" />
                <span>876 70th street Brooklyn NY 11228</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-construction-orange" />
                <span>+(212) 450-7419</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-construction-orange" />
                <span>info@constructionhub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ConstructionHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-construction-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-construction-orange text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-construction-orange text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
