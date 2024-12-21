import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, GraduationCap, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Career Selection & Planning - Class 10-12 | EA Global",
  description: "Expert career guidance for Class 10-12 students. Get personalized counselling to choose the right career path and plan your educational journey.",
  keywords: "career selection, career planning, class 10-12, career guidance, college selection, course selection",
};

const features = [
  {
    icon: Compass,
    title: "Career Discovery",
    description: "Explore various career paths aligned with your interests and abilities"
  },
  {
    icon: GraduationCap,
    title: "Course Selection",
    description: "Expert guidance on choosing the right courses for your career goals"
  },
  {
    icon: BookOpen,
    title: "College Planning",
    description: "Strategic planning for college admissions and future studies"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Define clear academic and career goals with actionable plans"
  }
];

export default function CareerSelectionPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Plan Your Career Path with Confidence
              </h1>
              <p className="text-lg text-gray-600">
                Get expert guidance to make informed decisions about your career and educational journey. Our counsellors help Class 10-12 students discover and pursue their ideal career paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Career planning"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Shape Your Future?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Take the first step towards a successful career with personalized guidance from our expert counsellors.
            </p>
            <Link href="/book">
              <Button size="lg">
                Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}