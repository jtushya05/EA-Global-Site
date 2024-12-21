"use client";

import { useState } from "react";
import { Testimonial } from "@/types/testimonial";
import TestimonialCard from "./TestimonialCard";
import VideoDialog from "@/components/shared/VideoDialog";

interface TestimonialGridProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
  filterByHomepage?: boolean;
}

export default function TestimonialGrid({ 
  testimonials, 
  columns = 3,
  filterByHomepage = false 
}: TestimonialGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Filter testimonials if filterByHomepage is true
  const displayTestimonials = testimonials?.length 
    ? (filterByHomepage ? testimonials.filter(t => t.show_on_homepage) : testimonials)
    : [];

  if (!displayTestimonials.length) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No testimonials available at the moment.
      </div>
    );
  }

  return (
    <>
      <div className={`grid md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-6 md:gap-8`}>
        {displayTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            onVideoClick={(videoUrl) => setSelectedVideo(videoUrl)}
          />
        ))}
      </div>

      {/* Video Dialog */}
      <VideoDialog
        isOpen={!!selectedVideo}
        videoUrl={selectedVideo || ''}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}
