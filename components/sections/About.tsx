import Image from "next/image";
import { Users2, Target, Trophy, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Users2,
    title: "Expert Counsellors",
    description: "Guidance from industry professionals with years of experience"
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Tailored career roadmaps based on your unique goals"
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "Track record of helping students achieve their career goals"
  },
  {
    icon: Lightbulb,
    title: "Career Insights",
    description: "Deep understanding of current job market trends"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Guiding You Towards Your Dream Career
            </h2>
            <p className="text-lg text-gray-600">
              At EA Global, we believe everyone deserves a fulfilling career. Our expert counsellors work closely with you to understand your aspirations, skills, and potential, helping you make informed decisions about your future.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Team meeting"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}