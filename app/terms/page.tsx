import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | EA Global",
  description: "Terms and Conditions for EA Global - Understanding our service agreement and user responsibilities.",
};

export default function TermsAndConditions() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      
      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using EA Global's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
          <p className="text-gray-700 leading-relaxed">
            EA Global provides career counseling, educational guidance, and related services. Our services include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Career counseling sessions</li>
            <li>Educational pathway planning</li>
            <li>Skills assessment and development</li>
            <li>Professional development resources</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            Users of our services agree to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Use our services in compliance with applicable laws</li>
            <li>Not engage in any unauthorized or harmful activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            Payment for our services must be made in accordance with our pricing structure. We reserve the right to modify our fees with reasonable notice. Refunds are subject to our refund policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content, materials, and resources provided through our services are protected by intellectual property rights. Users may not copy, distribute, or use these materials without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            EA Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any related matters.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason we deem appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="mt-2">
            <p className="font-medium">EA Global</p>
            <p>Email: legal@eaglobal.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </section>

        <p className="text-gray-500 mt-8">
          Last updated: March 20, 2024
        </p>
      </div>
    </main>
  );
}
