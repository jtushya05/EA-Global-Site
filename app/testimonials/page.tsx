import { Suspense } from "react";
import { getTestimonials } from "@/lib/testimonials";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";
import { Skeleton } from "@/components/ui/skeleton";

async function TestimonialsContent() {
  const testimonials = await getTestimonials();

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">What Our Students Say</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Read testimonials from our students about their experiences with our career counselling and guidance services
        </p>
      </div>

      {testimonials.some(t => t.type === 'video') && (
        <div className="mb-24">
          <h2 className="text-2xl font-semibold mb-4">Video Testimonials</h2>
          <TestimonialGrid 
            testimonials={testimonials.filter(t => t.type === 'video')} 
            columns={3} 
          />
        </div>
      )}

      {testimonials.some(t => t.type === 'text') && (
        <div className="mb-24">
          <h2 className="text-2xl font-semibold mb-4">Written Testimonials</h2>
          <TestimonialGrid 
            testimonials={testimonials.filter(t => t.type === 'text')} 
            columns={3} 
          />
        </div>
      )}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-96 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </div>
    }>
      <TestimonialsContent />
    </Suspense>
  );
}
