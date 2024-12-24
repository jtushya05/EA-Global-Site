import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users2, Presentation, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Book an Expert | EA Global",
  description: "Book career experts and industry professionals for seminars and mentorship sessions at your institution. Provide valuable insights to your students.",
  keywords: "career expert, career seminar, industry expert, career mentorship, professional guidance, institutional partnership",
};

const features = [
  {
    icon: Users2,
    title: "Expert Mentorship",
    description: "One-on-one or group mentorship sessions with industry professionals"
  },
  {
    icon: Presentation,
    title: "Career Seminars",
    description: "Engaging seminars on various career paths and industry trends"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose dates and times that work best for your institution"
  },
  {
    icon: BookOpen,
    title: "Custom Topics",
    description: "Tailored content based on your students' needs and interests"
  }
];

export default function BookExpertPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Book Industry Experts for Your Institution
              </h1>
              <p className="text-lg text-gray-600">
                Bring industry insights directly to your students through expert-led seminars and mentorship sessions. Our professionals provide valuable guidance on career paths and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/book?originPage=${encodeURIComponent("institutional-book-expert_GetStarted")}&serviceType=${encodeURIComponent("Expert Speaker Booking")}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Book an Expert <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                // src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                src="https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE="
                alt="Expert presentation"
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

      {/* Topics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Available Topics</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts cover a wide range of topics, including:
            </p>
            <ul className="text-left space-y-4 mb-12">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Industry Trends and Future Opportunities
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Career Planning and Development
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Skills Required for Different Professions
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Interview Preparation and Resume Building
              </li>
            </ul>
            <Link href={`/book?originPage=${encodeURIComponent("institutional-book-expert_GetStarted")}&serviceType=${encodeURIComponent("Expert Speaker Booking")}`}>
              <Button size="lg">
                Schedule a Session <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}