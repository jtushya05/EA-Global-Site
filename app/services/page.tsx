import { FileSearch, BookOpen, Target, Users2, PenTool, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Array of services offered by the application.
 * Each service includes an icon, title, description, details, duration, and price.
 */
const services = [
  {
    icon: FileSearch,
    title: "Career Assessment",
    description: "In-depth analysis of your skills, interests, and potential career paths",
    details: "Our career assessment service uses industry-leading tools and methodologies to help you understand your strengths, interests, and potential career paths. Through comprehensive evaluations and one-on-one discussions, we'll help you identify the most suitable career options.",
    duration: "2-3 hours",
    price: "5000 INR"
  },
  {
    icon: BookOpen,
    title: "Academic Guidance",
    description: "Expert advice on course selection and educational pathways",
    details: "Get personalized academic guidance to make informed decisions about your education. We'll help you choose the right courses, universities, and specializations that align with your career goals.",
    duration: "1-2 hours",
    price: "5500 INR"
  },
  {
    icon: Target,
    title: "Psychometric Test",
    description: "Comprehensive evaluation of your personality and cognitive abilities",
    details: "Our psychometric test service provides a thorough assessment of your personality traits, cognitive abilities, and behavioral style. This helps in understanding your strengths and areas for development, guiding you in your career choices.",
    duration: "1-2 hours",
    price: "3000 INR"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.details}</p>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                        <p className="text-lg font-semibold text-primary">{service.price}</p>
                      </div>
                      <Link href="/book">
                        <Button>Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}