import { Testimonial } from "@/types/testimonial";
import { parse } from "papaparse";
import fs from "fs/promises";
import path from "path";
import { cache } from 'react';

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'testimonials.csv');
    console.log('Reading testimonials from:', filePath);
    
    const csvData = await fs.readFile(filePath, 'utf-8');
    console.log('CSV data loaded successfully');
    
    const { data } = parse(csvData, { 
      header: true,
      skipEmptyLines: true 
    });
    console.log('Parsed testimonials count:', data.length);
    
    // Transform the raw data to match the Testimonial interface
    const testimonials = (data as any[]).map(item => ({
      ...item,
      id: item.id.toString(),
      featured: item.featured === 'true',
      rating: parseFloat(item.rating),
      tags: item.tags.split(',').map((tag: string) => tag.trim()),
      show_on_homepage: item.show_on_homepage === 'true'
    }));
    
    // Sort by ID to maintain CSV order
    return testimonials.sort((a, b) => parseInt(a.id) - parseInt(b.id)) as Testimonial[];
  } catch (error) {
    console.error("Error reading testimonials:", error);
    return [];
  }
});

// Helper function to get testimonials for homepage
export const getHomepageTestimonials = cache(async (): Promise<Testimonial[]> => {
  const testimonials = await getTestimonials();
  return testimonials.filter(t => t.show_on_homepage);
});

// Helper function to get testimonials by type
export const getTestimonialsByType = cache(async (type: 'video' | 'text'): Promise<Testimonial[]> => {
  const testimonials = await getTestimonials();
  return testimonials.filter(t => t.type === type);
});

// Helper function to get testimonials by field
export const getTestimonialsByField = cache(async (field: string): Promise<Testimonial[]> => {
  const testimonials = await getTestimonials();
  return testimonials.filter(t => t.field.toLowerCase() === field.toLowerCase());
});
