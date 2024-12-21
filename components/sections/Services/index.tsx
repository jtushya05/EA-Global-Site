import { FileSearch, BookOpen, Target, Users2, PenTool, ScrollText } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: FileSearch,
    title: "Career Assessment",
    description: "In-depth analysis of your skills, interests, and potential career paths"
  },
  {
    icon: BookOpen,
    title: "Academic Guidance",
    description: "Expert advice on course selection and educational pathways"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Help defining and achieving your short and long-term career objectives"
  },
  {
    icon: Users2,
    title: "Interview Preparation",
    description: "Mock interviews and feedback to boost your confidence"
  },
  {
    icon: PenTool,
    title: "Resume Building",
    description: "Professional resume writing and optimization services"
  },
  {
    icon: ScrollText,
    title: "SOP Writing",
    description: "Professional Statement of Purpose writing and editing services for university applications"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive career guidance services tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}