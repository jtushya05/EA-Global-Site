export interface BaseTestimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface TextTestimonial extends BaseTestimonial {
  type: "text";
}

export interface VideoTestimonial extends BaseTestimonial {
  type: "video";
  videoUrl: string;
}

export type Testimonial = TextTestimonial | VideoTestimonial;