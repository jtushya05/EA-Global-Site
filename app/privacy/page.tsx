import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EA Global",
  description: "Privacy Policy for EA Global - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Name and contact information</li>
            <li>Educational background and career interests</li>
            <li>Communication preferences</li>
            <li>Feedback and correspondence</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide and personalize our services</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Professional advisers and legal authorities when required</li>
            <li>Educational institutions with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us through our website's contact form.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last revised" date and the updated version will be effective as soon as it is accessible.
          </p>
          <p className="text-gray-500 mt-4">
            Last revised: March 20, 2024
          </p>
        </section>
      </div>
    </main>
  );
}
