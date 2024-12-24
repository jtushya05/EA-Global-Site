'use client';

import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const [serviceType, setServiceType] = useState(searchParams.get('serviceType') || '');
  const originPage = searchParams.get('originPage') || 'direct';

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    return cleanPhone.startsWith('+') && cleanPhone.length >= 11;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message: string) => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('Booking Form', { body: message });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('Booking Form', { body: message });
          }
        });
      }
    }
    alert(message);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = (formData.get('name') as string).trim();
      const email = (formData.get('email') as string).trim();
      const phone = (formData.get('phone') as string).trim();
      const date = formData.get('date') as string;
      const serviceType = (formData.get('serviceType') as string).trim();
      const notes = (formData.get('notes') as string || '').trim();

      if (name.length < 2) {
        showNotification('Please enter a valid name');
        setIsSubmitting(false);
        return;
      }

      if (!validateEmail(email)) {
        showNotification('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      if (!validatePhone(phone)) {
        showNotification('Please enter a valid phone number with country code (e.g., +91)');
        setIsSubmitting(false);
        return;
      }

      // Create the Google Forms submission URL with originPage tracking
      const url = `https://docs.google.com/forms/d/18Zx9t-TYpcN2VCGqLRS8d5MY2-Zg1fW7K4HsvowHrLM/formResponse?usp=pp_url&entry.1169845566=${encodeURIComponent(name)}&entry.2096364701=${encodeURIComponent(email)}&entry.1871500665=${encodeURIComponent(date || '')}&entry.26593180=${encodeURIComponent(serviceType)}&entry.1109080701=${encodeURIComponent(phone)}&entry.1104932019=${encodeURIComponent(notes || '')}&entry.166295812=${encodeURIComponent(originPage)}`;

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      iframe.src = url;

      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
        if (formRef.current) {
          formRef.current.reset();
        }
        setIsSubmitting(false);
        showNotification('Booking submitted successfully! We\'ll get back to you soon to confirm your consultation.');
      }, 1000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      showNotification('Error submitting booking. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-8">Book a Consultation</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Preferred Date (Optional)
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="serviceType" className="text-sm font-medium">
                  Service Type
                </label>
                <Input
                  id="serviceType"
                  name="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  required
                  placeholder="Enter service type"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">
                  Additional Notes (Optional)
                </label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Tell us about your career goals..."
                  className="h-32"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Book Consultation
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-center mb-8">Loading...</h1>
          </div>
        </section>
      </main>
    }>
      <BookingForm />
    </Suspense>
  );
}
