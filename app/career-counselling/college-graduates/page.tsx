import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, LineChart, Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Career Development - College Students & Graduates | EA Global",
  description: "Expert career guidance for college students and graduates. Get personalized counselling for career selection, development, and post-graduation planning.",
  keywords: "career development, graduate careers, career guidance, job planning, further studies, career counselling",
};

const features = [
  {
    icon: Briefcase,
    title: "Career Path Selection",
    description: "Identify and pursue the right career path based on your skills and interests"
  },
  {
    icon: LineChart,
    title: "Professional Development",
    description: "Develop essential skills and competencies for career growth"
  },
  {
    icon: GraduationCap,
    title: "Further Studies Planning",
    description: "Guidance on pursuing higher education and specializations"
  },
  {
    icon: Users2,
    title: "Industry Insights",
    description: "Stay updated with current industry trends and requirements"
  }
];

export default function CareerDevelopmentPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Take Your Career to the Next Level
              </h1>
              <p className="text-lg text-gray-600">
                Whether you&apos;re planning your first career move or looking to advance your professional journey, our expert counsellors provide personalized guidance for college students and graduates.
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
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional development"
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

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Get expert guidance to make informed decisions about your career path and professional development.
            </p>
            <Link href="/book">
              <Button size="lg">
                Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}