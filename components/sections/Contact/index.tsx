import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@englisharenaglobal.com",
    link: "mailto:info@englisharenaglobal.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 9894018848",
    link: "tel:+919894018848"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "127A, Brikkiln Road, Purasaiwakkam, Chennai",
    link: "https://www.google.com/maps/place/English+Arena+Global/data=!4m2!3m1!1s0x0:0x586c91da57aa5b09?sa=X&ved=1t:2428&ictx=111"
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
                <div className="flex-1 -mr-4">
                  <h3 className="font-semibold text-gray-900 pl-4">{item.title}</h3>
                  <p className="text-gray-600 pl-4">{item.details}</p>
                  {item.title === "Office" && (
                    <div className="mt-4 w-full h-48 rounded-lg overflow-hidden bg-gray-100 px-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4583426221514!2d80.26173007475556!3d13.078869987253505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5c0eb06c05%3A0x586c91da57aa5b09!2sEnglish%20Arena%20Global!5e0!3m2!1sen!2sin!4v1710928877335!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0, display: 'block', margin: 'auto' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}