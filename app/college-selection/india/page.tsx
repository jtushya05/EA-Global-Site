import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, GraduationCap, Target, Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "College Selection in India | EA Global",
  description: "Expert guidance for selecting the right college in India. Get personalized counselling for university selection and application process.",
  keywords: "college selection india, university admission, higher education india, college counselling, university guidance",
};

const features = [
  {
    icon: Search,
    title: "College Research",
    description: "In-depth analysis of colleges based on your preferences and requirements"
  },
  {
    icon: GraduationCap,
    title: "Course Selection",
    description: "Guidance on choosing the right course and specialization"
  },
  {
    icon: Target,
    title: "Admission Strategy",
    description: "Strategic planning for college applications and admissions"
  },
  {
    icon: Users2,
    title: "Expert Guidance",
    description: "One-on-one sessions with experienced counsellors"
  }
];

export default function CollegeSelectionIndiaPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Find Your Perfect College in India
              </h1>
              <p className="text-lg text-gray-600">
                Get expert guidance to identify and select the best colleges in India. Our counsellors help you make informed decisions about your higher education.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/book?originPage=${encodeURIComponent("college-selection-india_GetStarted")}&serviceType=${encodeURIComponent("India College Selection")}`}>
                    <Button size="lg" className="w-full sm:w-auto">
                      Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-500">
                  ₹5000 for 2 comprehensive sessions
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="College campus"
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

      {/* Payment Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your College Journey Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive guidance package includes two detailed sessions to help you make the right choice.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <p className="text-2xl font-bold text-primary mb-2">₹5000</p>
              <p className="text-gray-600">for 2 sessions</p>
            </div>
            <Link href={`/book?originPage=${encodeURIComponent("college-selection-india_GetStarted")}&serviceType=${encodeURIComponent("India College Selection")}`}>
              <Button size="lg">
                Book Your Sessions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}