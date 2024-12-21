"use client";

import Image from "next/image";
import { Star, Quote, Play } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onVideoClick?: (videoUrl: string) => void;
}

export default function TestimonialCard({ testimonial, onVideoClick }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {testimonial.type === "video" ? (
        <div 
          className="relative h-48 bg-gray-100 cursor-pointer"
          onClick={() => onVideoClick?.(testimonial.videoUrl)}
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
      ) : (
        <div className="p-6">
          <Quote className="w-10 h-10 text-primary/20 mb-4" />
          <p className="text-gray-600 mb-6">{testimonial.content}</p>
        </div>
      )}
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
  );
}