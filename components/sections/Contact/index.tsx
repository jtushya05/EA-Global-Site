import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@eaglobal.com",
    link: "mailto:contact@eaglobal.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 000-0000",
    link: "tel:+15550000000"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Career Street, Business District, NY 10001",
    link: "https://maps.google.com"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to start your career journey? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <ContactForm />
          </div>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}