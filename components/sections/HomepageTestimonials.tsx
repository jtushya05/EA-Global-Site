import { Testimonial } from "@/types/testimonial";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Kavya Ramachandran",
    designation: "Class 10 Student",
    image: "/images/placeholder.jpg",
    testimonial: "After Class 10, I was confused between different streams. EA Global's counseling helped me understand my strengths through scientific assessments. Their guidance led me to choose Commerce with Mathematics, aligning perfectly with my analytical skills and interest in finance.",
    video: "https://www.youtube.com/watch?v=example1",
    featured: true,
    rating: 4.8,
    tags: ["stream selection", "class 10", "career guidance"],
    type: "video" as const,
    show_on_homepage: true,
    field: "Stream Selection",
    google_review_link: "https://g.co/kgs/oDWGxHA"
  },
  {
    id: "2",
    name: "Aditya Krishnan",
    designation: "Class 12 Student",
    image: "/images/placeholder.jpg",
    testimonial: "EA Global's career counseling was eye-opening. Through their guidance, I discovered my passion for Computer Science. Their personalized approach and insights into different career paths helped me make an informed decision about my future.",
    featured: true,
    rating: 5.0,
    tags: ["career guidance", "class 12", "counseling"],
    type: "text" as const,
    show_on_homepage: true,
    field: "Career Guidance",
    google_review_link: "https://g.co/kgs/oDWGxHA"
  },
  {
    id: "3",
    name: "Shreya Iyer",
    designation: "Undergraduate Aspirant",
    image: "/images/placeholder.jpg",
    testimonial: "Thanks to EA Global's UK university counseling, I secured admission to my dream university in London. Their expertise in personal statement writing and university selection was invaluable. They helped me navigate the UCAS process and scholarship applications successfully.",
    video: "https://www.youtube.com/watch?v=example3",
    featured: true,
    rating: 4.9,
    tags: ["UK education", "undergraduate", "counseling"],
    type: "video" as const,
    show_on_homepage: true,
    field: "Overseas Education",
    google_review_link: "https://g.co/kgs/oDWGxHA"
  }
];

export default function HomepageTestimonials() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from students who have transformed their careers with our guidance
          </p>
        </div>

        <div className="mb-12">
          <TestimonialGrid 
            testimonials={testimonials} 
            columns={3}
          />
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              View All Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
