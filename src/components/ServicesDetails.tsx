
import { useState } from 'react';
import { BrainCircuit, Lightbulb, Users, LifeBuoy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesDetails = () => {
  const [activeTab, setActiveTab] = useState("design");
  
  const designServices = [
    {
      title: "Architectural Design",
      description: "Comprehensive architectural design services for residential and commercial projects."
    },
    {
      title: "Structural Engineering",
      description: "Expert structural engineering solutions for safe and stable construction."
    },
    {
      title: "MEP Design",
      description: "Mechanical, Electrical, and Plumbing design services for optimal building functionality."
    },
    {
      title: "CAD Drafting",
      description: "Precise CAD drafting services to bring your construction plans to life."
    },
    {
      title: "BIM Services",
      description: "Building Information Modeling for improved project visualization and coordination."
    },
    {
      title: "3D Rendering & Visualization",
      description: "High-quality 3D renderings to visualize projects before construction begins."
    },
    {
      title: "Construction Planning & Scheduling",
      description: "Detailed planning and scheduling to ensure project timelines are met."
    },
    {
      title: "Feasibility Studies",
      description: "Comprehensive feasibility studies to determine project viability."
    }
  ];

  const estimationServices = [
    {
      title: "Quantity Takeoff Services",
      items: [
        "Concrete (footings, slabs, columns)",
        "Masonry (blockwork, brickwork)",
        "Steel (rebar, structural steel)",
        "Carpentry & Millwork",
        "Drywall & Insulation",
        "Roofing & Waterproofing",
        "Painting & Finishes",
        "Flooring (tiles, wood, carpet)",
        "Doors, Windows & Glazing",
        "MEP Takeoffs",
        "Sitework & Earthworks",
        "Landscaping & External Works"
      ]
    },
    {
      title: "Cost Estimation Services",
      items: [
        "Preliminary/Budget Estimates",
        "Detailed Estimates",
        "Bid Estimates",
        "Conceptual Cost Estimating",
        "Labor & Equipment Rate Analysis",
        "Value Engineering Support",
        "Change Order Estimates",
        "Life-Cycle Cost Analysis"
      ]
    },
    {
      title: "Software-Based Services",
      items: [
        "On-Screen Takeoff (OST)",
        "Bluebeam Revu Quantity Takeoffs",
        "Planswift Estimation",
        "RSMeans Integration",
        "Microsoft Excel Estimating Models",
        "CostX or Trimble-based Estimations"
      ]
    },
    {
      title: "Documentation & Reporting",
      items: [
        "Bill of Quantities (BOQ) Preparation",
        "Material Cost Reports",
        "Vendor Comparison Reports",
        "Bid Package Preparation",
        "Cost Breakdown Structure Reports",
        "Historical Cost Database Maintenance"
      ]
    }
  ];

  const managementServices = [
    {
      title: "Project Management",
      description: "Comprehensive project management services from inception to completion."
    },
    {
      title: "Site Supervision",
      description: "Expert site supervision to ensure quality construction and compliance."
    },
    {
      title: "Labor Supply",
      description: "Skilled and unskilled labor supply services for construction projects."
    },
    {
      title: "Equipment Rental & Operation",
      description: "Construction equipment rental and operation services."
    },
    {
      title: "Surveying Services",
      description: "Precise surveying services for accurate construction layouts."
    },
    {
      title: "Safety Management",
      description: "Comprehensive safety management to ensure a safe construction environment."
    },
    {
      title: "Logistics & Material Management",
      description: "Efficient logistics and material management for timely project completion."
    },
    {
      title: "Temporary Facilities",
      description: "Temporary facilities such as site offices and storage units for construction projects."
    }
  ];

  const supportServices = [
    {
      title: "Procurement & Vendor Management",
      description: "Efficient procurement and vendor management services."
    },
    {
      title: "Contract Administration",
      description: "Expert contract administration for construction projects."
    },
    {
      title: "Document Control & Records Management",
      description: "Comprehensive document control and records management services."
    },
    {
      title: "Cost Control & Budgeting",
      description: "Effective cost control and budgeting services for construction projects."
    },
    {
      title: "HR & Payroll Services",
      description: "HR and payroll services for site teams to ensure smooth operations."
    },
    {
      title: "Construction Accounting",
      description: "Specialized construction accounting services."
    },
    {
      title: "Legal & Claims Consulting",
      description: "Legal and claims consulting services for construction projects."
    },
    {
      title: "Construction Software Implementation",
      description: "Implementation of construction software such as Procore and PlanGrid."
    },
    {
      title: "Remote Site Monitoring",
      description: "Remote site monitoring using CCTV and drones for project oversight."
    },
    {
      title: "Data Analytics",
      description: "Data analytics services for construction performance optimization."
    },
    {
      title: "Digital Twin Modeling",
      description: "Digital twin modeling services for advanced project visualization."
    },
    {
      title: "GIS Mapping & Spatial Analysis",
      description: "GIS mapping and spatial analysis for construction project planning."
    }
  ];

  const renderTabContent = (category: string) => {
    switch(category) {
      case "design":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {designServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                <h4 className="text-lg font-semibold text-construction-blue mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        );
      case "estimation":
        return (
          <div className="mt-8">
            {estimationServices.map((category, catIndex) => (
              <div 
                key={catIndex} 
                className="mb-10"
                data-aos="fade-up"
                data-aos-delay={catIndex * 100}
              >
                <h4 className="text-xl font-semibold text-construction-blue mb-4">{category.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-white rounded-lg shadow-sm p-4 flex items-center"
                    >
                      <div className="text-construction-orange mr-3">•</div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "management":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {managementServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                <h4 className="text-lg font-semibold text-construction-blue mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        );
      case "support":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                <h4 className="text-lg font-semibold text-construction-blue mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const tabIcons = {
    design: <BrainCircuit className="w-5 h-5" />,
    estimation: <Lightbulb className="w-5 h-5" />,
    management: <Users className="w-5 h-5" />,
    support: <LifeBuoy className="w-5 h-5" />
  };

  return (
    <section id="services-details" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold mb-3 text-construction-blue" data-aos="fade-up">
            Comprehensive Services
          </h2>
          <div className="w-20 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Explore our wide range of specialized construction services designed to meet your project needs
          </p>
        </div>

        <Tabs
          defaultValue="design"
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <TabsList className="bg-white shadow-md mb-8 p-1">
              <TabsTrigger 
                value="design" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-construction-blue py-2 px-4 flex items-center gap-2"
                onClick={() => setActiveTab("design")}
                id="design-tab"
              >
                {tabIcons.design}
                <span className="hidden md:inline">Design</span>
              </TabsTrigger>
              <TabsTrigger 
                value="estimation" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-construction-blue py-2 px-4 flex items-center gap-2"
                onClick={() => setActiveTab("estimation")}
                id="estimation-tab"
              >
                {tabIcons.estimation}
                <span className="hidden md:inline">Estimation</span>
              </TabsTrigger>
              <TabsTrigger 
                value="management" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-construction-blue py-2 px-4 flex items-center gap-2"
                onClick={() => setActiveTab("management")}
                id="management-tab"
              >
                {tabIcons.management}
                <span className="hidden md:inline">Management</span>
              </TabsTrigger>
              <TabsTrigger 
                value="support" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-construction-blue py-2 px-4 flex items-center gap-2"
                onClick={() => setActiveTab("support")}
                id="support-tab"
              >
                {tabIcons.support}
                <span className="hidden md:inline">Support</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="design" id="design">
            {renderTabContent("design")}
          </TabsContent>
          <TabsContent value="estimation" id="estimation">
            {renderTabContent("estimation")}
          </TabsContent>
          <TabsContent value="management" id="management">
            {renderTabContent("management")}
          </TabsContent>
          <TabsContent value="support" id="support">
            {renderTabContent("support")}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesDetails;
