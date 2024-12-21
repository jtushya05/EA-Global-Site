import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, FileCheck, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stream & Subject Selection - Class 8-9 | EA Global",
  description: "Expert guidance for Class 8-9 students to select the right stream and subjects aligned with future career goals. Get personalized counselling from EA Global.",
  keywords: "stream selection, subject selection, class 8-9, career guidance, academic counselling, career planning",
};

const features = [
  {
    icon: Brain,
    title: "Aptitude Assessment",
    description: "Comprehensive evaluation of your strengths, interests, and natural abilities"
  },
  {
    icon: Target,
    title: "Stream Guidance",
    description: "Expert advice on choosing between Science, Commerce, Arts, or other streams"
  },
  {
    icon: FileCheck,
    title: "Subject Selection",
    description: "Personalized recommendations for subject combinations that align with your goals"
  },
  {
    icon: BookOpen,
    title: "Academic Planning",
    description: "Strategic planning for academic success and future career preparation"
  }
];

export default function StreamSelectionPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Choose the Right Stream & Subjects for Your Future
              </h1>
              <p className="text-lg text-gray-600">
                Make informed decisions about your academic path with expert guidance tailored for Class 8-9 students. Our counsellors help you understand your strengths and choose the perfect stream and subjects.
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
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Students studying"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose EA Global?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our expert counsellors provide personalized guidance to help you make the best academic choices for your future career.
            </p>
            <Link href="/book">
              <Button size="lg">
                Start Your Journey Today <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}