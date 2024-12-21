import Image from "next/image";
import { Award, BookOpen, Users2, GraduationCap, Mail, Phone, Linkedin } from "lucide-react";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import { Button } from "@/components/ui/button";

const stats = [
  { number: 20, label: "Years Experience", suffix: "+" },
  { number: 5000, label: "Students Guided", suffix: "+" },
  { number: 99, label: "Success Rate", suffix: "%" },
  { number: 100, label: "Partner Institutions", suffix: "+" },
];

// Values array remains the same...

const founder = {
  name: "Darshana Jain",
  role: "Founder & Lead Career Counsellor",
  image: "https://media.licdn.com/dms/image/v2/C5603AQGnX6v69OXjJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649003980771?e=2147483647&v=beta&t=sKJXNikLAF-IycI89d6PVKdOEMzxUIKxNk9910LpeGQ",
  bio: "With over 20 years of experience in career counselling, Darshana has helped thousands of students achieve their career goals. Her expertise in career guidance has made her one of the most sought-after counsellors in India.",
  social: {
    linkedin: "https://in.linkedin.com/in/darshana-englisharena",
    email: "coachdarshana@gmail.com",
    phone: "+919894018848"
  }
};

const experts = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Senior Career Expert",
    image: "/team/expert1.jpg",
    bio: "PhD in Career Psychology with 15+ years of experience in student counselling.",
    social: {
      linkedin: "https://counselling.englisharenaglobal.com/about#",
      email: "info@englisharenaglobal.com"
    }
  },
  {
    name: "Priya Sharma",
    role: "Education Counsellor",
    image: "/team/expert2.jpg",
    bio: "Specialized in overseas education counselling with focus on US and UK universities.",
    social: {
      linkedin: "https://counselling.englisharenaglobal.com/about#",
      email: "info@englisharenaglobal.com"
    }
  },
  {
    name: "Amit Patel",
    role: "Career Development Specialist",
    image: "/team/expert3.jpg",
    bio: "Expert in psychometric assessment and career planning for high school students.",
    social: {
      linkedin: "https://counselling.englisharenaglobal.com/about#",
      email: "info@englisharenaglobal.com"
    }
  },
  {
    name: "Dr. Meera Reddy",
    role: "Academic Counsellor",
    image: "/team/expert4.jpg",
    bio: "Specializes in academic planning and college admissions guidance.",
    social: {
      linkedin: "https://counselling.englisharenaglobal.com/about#",
      email: "info@englisharenaglobal.com"
    }
  },
  {
    name: "Sanjay Verma",
    role: "Industry Relations Expert",
    image: "/team/expert5.jpg",
    bio: "Bridges the gap between academia and industry with 12+ years of corporate experience.",
    social: {
      linkedin: "https://counselling.englisharenaglobal.com/about#",
      email: "info@englisharenaglobal.com"
    }
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section remains the same... */}

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section remains the same... */}

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-96 md:h-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary text-lg mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-6">{founder.bio}</p>
                  <div className="flex gap-4">
                    <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={`mailto:${founder.social.email}`}>
                      <Button variant="outline" size="icon">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={`tel:${founder.social.phone}`}>
                      <Button variant="outline" size="icon">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team of Experts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <div key={expert.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
                  <p className="text-primary mb-3">{expert.role}</p>
                  <p className="text-gray-600 mb-4">{expert.bio}</p>
                  <div className="flex gap-3">
                    <a href={expert.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={`mailto:${expert.social.email}`}>
                      <Button variant="outline" size="icon">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
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