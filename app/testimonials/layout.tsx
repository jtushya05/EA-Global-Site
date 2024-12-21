import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | EA Global",
  description: "Read and watch what our students say about their experience with EA Global's career counselling services.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}