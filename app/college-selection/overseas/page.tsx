import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, GraduationCap, Building2, Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Overseas Education Guidance | EA Global",
  description: "Expert guidance for studying abroad. Get comprehensive support from program selection to visa assistance and accommodation arrangements.",
  keywords: "study abroad, overseas education, international studies, visa assistance, accommodation abroad, foreign universities",
};

const features = [
  {
    icon: Globe,
    title: "Country Selection",
    description: "Expert guidance on choosing the right study destination based on your goals"
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Help in selecting universities that match your academic profile and aspirations"
  },
  {
    icon: Building2,
    title: "Accommodation Support",
    description: "Assistance in finding suitable accommodation options abroad"
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Complete support throughout the visa application process"
  }
];

export default function OverseasEducationPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Your Gateway to Global Education
              </h1>
              <p className="text-lg text-gray-600">
                Get comprehensive guidance for your international education journey. From choosing the right country and university to visa assistance and accommodation arrangements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="International Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Study Abroad?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Take the first step towards your international education journey with our expert guidance.
            </p>
            <Link href="/book">
              <Button size="lg">
                Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}