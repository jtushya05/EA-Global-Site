export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  image: string;
  testimonial: string;
  video?: string;
  featured: boolean;
  rating: number;
  tags: string[];
  type: 'video' | 'text';
  show_on_homepage: boolean;
  field: string;
  google_review_link?: string;
}
