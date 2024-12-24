import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users2, Target, BookOpen, LineChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "In-School Career Guidance | EA Global",
  description: "Comprehensive career guidance services for schools and colleges. Help your students discover their strengths and make informed career decisions.",
  keywords: "school career guidance, career counselling schools, student career development, institutional partnerships, career awareness",
};

const features = [
  {
    icon: Users2,
    title: "Group Sessions",
    description: "Interactive career awareness sessions for student groups"
  },
  {
    icon: Target,
    title: "Individual Counselling",
    description: "One-on-one guidance sessions for personalized support"
  },
  {
    icon: BookOpen,
    title: "Career Resources",
    description: "Access to comprehensive career planning materials"
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Regular assessment of student career development"
  }
];

export default function InSchoolGuidancePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Empower Your Students&apos; Career Journey
              </h1>
              <p className="text-lg text-gray-600">
                Partner with EA Global to provide comprehensive career guidance services at your institution. Help your students discover their potential and make informed career decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/book?originPage=${encodeURIComponent("institutional-career-guidance_GetStarted")}&serviceType=${encodeURIComponent("School Career Guidance Program")}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="School career guidance"
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

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg text-gray-600 mb-12">
              Join hands with EA Global to provide comprehensive career guidance services to your students. Let&apos;s work together to shape their future.
            </p>
            <Link href={`/book?originPage=${encodeURIComponent("institutional-career-guidance_GetStarted")}&serviceType=${encodeURIComponent("School Career Guidance Program")}`}>
              <Button size="lg">
                Schedule a Discussion <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}