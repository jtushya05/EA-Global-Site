"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import VideoDialog from "@/components/shared/VideoDialog";

interface Testimonial {
  id: string;
  type: "text" | "video";
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  videoUrl?: string;
}

const featuredTestimonials: Testimonial[] = [
  {
    id: "1",
    type: "text",
    name: "Rahul Mehta",
    role: "Fine Arts Student",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png",
    content: "The creative career counseling opened up new possibilities in the arts field. The counselor's knowledge of both traditional and digital art careers helped me blend my classical training with modern techniques.",
    rating: 5
  },
  {
    id: "2",
    type: "video",
    name: "A. Raghavan",
    role: "Class 10 Student",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeZq4olbYm6PzL8wYJhsrobAq4gccrTsGUA&s",
    content: "The stream selection counseling transformed my confusion into clarity. Through scientific aptitude tests and expert guidance, I found my perfect fit in science with computer science.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/your-video-id"
  },
  {
    id: "3",
    type: "text",
    name: "Kavya Ramachandran",
    role: "Fashion Design Aspirant",
    image: "https://img.freepik.com/premium-photo/indian-female-college-student-university-girl-student-with-books-bag_466689-96774.jpg",
    content: "The counseling sessions helped me understand the various aspects of the fashion industry. Their insights into both design and business aspects of fashion, along with guidance on portfolio development, were incredibly helpful.",
    rating: 5
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600">
            Hear from students who have transformed their careers with our guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div>
                {testimonial.type === "video" && (
                  <div 
                    className="relative h-48 bg-gray-100 cursor-pointer"
                    onClick={() => testimonial.videoUrl && setSelectedVideo(testimonial.videoUrl)}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover opacity-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full p-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>

      <VideoDialog 
        isOpen={!!selectedVideo}
        videoUrl={selectedVideo || ''} 
        onClose={() => setSelectedVideo(null)} 
      />
    </section>
  );
}
