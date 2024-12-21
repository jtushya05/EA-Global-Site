import { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    type: "text",
    name: "Priya Sharma",
    role: "Engineering Student, IIT Bombay",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "The guidance I received from EA Global was invaluable. They helped me choose the right engineering branch and prepare for IIT-JEE. The counselors took time to understand my strengths and interests, making the decision-making process much clearer.",
    rating: 5
  },
  {
    id: "2",
    type: "video",
    name: "Rahul Patel",
    role: "Medical Student, AIIMS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Watch my journey with EA Global and how they helped me achieve my dream of getting into AIIMS.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/your-video-id"
  },
  // ... add more testimonials
];