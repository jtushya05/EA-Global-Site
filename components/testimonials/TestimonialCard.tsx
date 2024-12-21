"use client";

import { Testimonial } from "@/types/testimonial";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onVideoClick?: (videoUrl: string) => void;
}

export default function TestimonialCard({ testimonial, onVideoClick }: TestimonialCardProps) {
  const hasVideo = testimonial.type === 'video';
  const stars = "★".repeat(Math.floor(testimonial.rating)) + "☆".repeat(5 - Math.floor(testimonial.rating));

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(testimonial.name)}
              alt={testimonial.name}
              fill
              className="object-cover"
              onError={(e: any) => {
                e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(testimonial.name);
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
            <p className="text-sm text-yellow-500">{stars}</p>
          </div>
        </div>
        <p className="text-muted-foreground flex-1 mb-6">{testimonial.testimonial}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-4 mb-4">
            {hasVideo && onVideoClick && (
              <button
                onClick={() => onVideoClick(testimonial.video!)}
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            )}
            {testimonial.google_review_link && (
              <a
                href={testimonial.google_review_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
                </svg>
                Google Review
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {testimonial.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
