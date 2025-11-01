import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "../../src/assets/headerlogo.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EF] text-[#0C1446]">
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        <header className="pt-10">
          <div className="max-w-4xl mx-auto text-center">
           
            <h1
              className="text-3xl md:text-4xl font-extrabold leading-tight"
              style={{ color: "var(--brand-text)" }}
            >
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Last Updated:{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--brand-text)" }}
              >
                November 01, 2025
              </span>
            </p>
          </div>
        </header>

        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <article className="bg-white/60 rounded-2xl page-card p-8 md:p-12">
              <p className="mb-6 text-base leading-relaxed">
                <strong>CP (Channel Partner) Privacy Policy</strong> describes how
                we collect, use, and protect your personal information when you
                visit our website or use our services.
              </p>
              {/* ---------- Sections Start ---------- */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  1. Information We Collect
                </h2>

                <h3 className="font-semibold mt-3">Personal Information</h3>
                <p className="mb-2">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>
                    Name and contact information (email address, phone number,
                    mailing address)
                  </li>
                  <li>Educational background and work experience</li>
                  <li>Payment information for course enrollment</li>
                  <li>Academic records and progress information</li>
                  <li>Communication preferences</li>
                  <li>
                    Technical information about your device and internet
                    connection
                  </li>
                </ul>

                <h3 className="font-semibold mt-3">
                  Automatically Collected Information
                </h3>
                <p className="mb-2">
                  When you visit our website, we automatically collect certain
                  information:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device type and operating system</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>
              <section aria-labelledby="how-we-use" class="mb-6">
                {" "}
                <h2 id="how-we-use" class="text-xl font-semibold mb-3">
                  {" "}
                  2. How We Use Your Information{" "}
                </h2>{" "}
                <p>
                  {" "}
                  We use your personal information for the following purposes:{" "}
                </p>{" "}
                <ul class="list-disc list-inside mt-3 space-y-1">
                  {" "}
                  <li>
                    Providing educational services and course materials
                  </li>{" "}
                  <li>Processing enrollments and payments</li>{" "}
                  <li>
                    {" "}
                    Communicating about your courses and academic progress{" "}
                  </li>{" "}
                  <li>
                    Providing customer support and technical assistance
                  </li>{" "}
                  <li>Sending marketing communications (with your consent)</li>{" "}
                  <li>Improving our website and services</li>{" "}
                  <li>Complying with legal obligations</li>{" "}
                  <li>Preventing fraud and ensuring security</li>{" "}
                </ul>{" "}
              </section>{" "}
              <section aria-labelledby="sharing" class="mb-6">
                {" "}
                <h2 id="sharing" class="text-xl font-semibold mb-3">
                  {" "}
                  3. Information Sharing and Disclosure{" "}
                </h2>{" "}
                <p>
                  {" "}
                  We do not sell, rent, or trade your personal information. We
                  may share your information in the following circumstances:{" "}
                </p>{" "}
                <h3 class="font-semibold mt-3">Service Providers</h3>{" "}
                <p class="mb-2">
                  {" "}
                  We may share information with trusted third-party service
                  providers who assist us in operating our website and providing
                  services, including:{" "}
                </p>{" "}
                <ul class="list-disc list-inside mb-4 space-y-1">
                  {" "}
                  <li>Payment processing companies</li>{" "}
                  <li>Educational technology platforms</li>{" "}
                  <li>Email marketing services</li> <li>Analytics providers</li>{" "}
                  <li>Customer support services</li>{" "}
                </ul>{" "}
                <h3 class="font-semibold mt-3">Privacy</h3>{" "}
                <p class="mb-4">
                  {" "}
                  We may disclose your information when required by law or to:{" "}
                </p>{" "}
                <ul class="list-disc list-inside space-y-1">
                  {" "}
                  <li>Protect our rights, property, or safety</li>{" "}
                  <li>Prevent fraud or security threats</li>{" "}
                </ul>{" "}
              </section>{" "}
              <section aria-labelledby="security" class="mb-6">
                {" "}
                <h2 id="security" class="text-xl font-semibold mb-3">
                  {" "}
                  4. Data Security{" "}
                </h2>{" "}
                <p class="mb-3">
                  {" "}
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures
                  include:{" "}
                </p>{" "}
                <ul class="list-disc list-inside space-y-1">
                  {" "}
                  <li>Encryption of sensitive data during transmission</li>{" "}
                  <li>Secure server infrastructure</li>{" "}
                  <li>Regular security assessments and updates</li>{" "}
                  <li>Access controls and employee training</li>{" "}
                  <li>Incident response procedures</li>{" "}
                </ul>{" "}
                <p class="mt-3 text-sm text-gray-600">
                  {" "}
                  Important: While we strive to protect your personal
                  information, no method of transmission over the internet or
                  electronic storage is 100% secure. We cannot guarantee
                  absolute security.{" "}
                </p>{" "}
              </section>{" "}
              <section aria-labelledby="cookies" class="mb-6">
                {" "}
                <h2 id="cookies" class="text-xl font-semibold mb-3">
                  {" "}
                  5. Cookies and Tracking Technologies{" "}
                </h2>{" "}
                <p class="mb-3">
                  {" "}
                  We use cookies and similar technologies to enhance your
                  browsing experience. These technologies help us:{" "}
                </p>{" "}
                <ul class="list-disc list-inside space-y-1">
                  {" "}
                  <li>Remember your preferences and login information</li>{" "}
                  <li>Analyze website traffic and usage patterns</li>{" "}
                  <li>Provide personalized content and recommendations</li>{" "}
                  <li>Improve our website functionality</li>{" "}
                </ul>{" "}
                <p class="mt-3">
                  {" "}
                  You can control cookies through your browser settings.
                  However, disabling cookies may limit some features of our
                  website.{" "}
                </p>{" "}
              </section>{" "}
              <section aria-labelledby="rights" class="mb-6">
                {" "}
                <h2 id="rights" class="text-xl font-semibold mb-3">
                  {" "}
                  6. Your Rights and Choices{" "}
                </h2>{" "}
                <p class="mb-3">
                  {" "}
                  Depending on your location, you may have the following rights
                  regarding your personal information:{" "}
                </p>{" "}
                <ul class="list-disc list-inside space-y-1">
                  {" "}
                  <li>
                    Access: Request access to your personal information
                  </li>{" "}
                  <li>
                    {" "}
                    Correction: Request correction of inaccurate information{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    Deletion: Request deletion of your personal information{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    Portability: Request transfer of your data to another
                    service{" "}
                  </li>{" "}
                  <li>
                    Opt-out: Unsubscribe from marketing communications
                  </li>{" "}
                  <li>
                    {" "}
                    Object: Object to certain processing of your information{" "}
                  </li>{" "}
                </ul>{" "}
              </section>{" "}
              <section aria-labelledby="children" class="mb-6">
                {" "}
                <h2 id="children" class="text-xl font-semibold mb-3">
                  {" "}
                  7. Children's Privacy{" "}
                </h2>{" "}
                <p>
                  {" "}
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  personal information from a child under 13, we will take steps
                  to delete such information.{" "}
                </p>{" "}
              </section>{" "}
              <section aria-labelledby="transfers" class="mb-6">
                {" "}
                <h2 id="transfers" class="text-xl font-semibold mb-3">
                  {" "}
                  8. International Data Transfers{" "}
                </h2>{" "}
                <p>
                  {" "}
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and that your
                  information receives adequate protection.{" "}
                </p>{" "}
              </section>{" "}
              <section aria-labelledby="retention" class="mb-6">
                {" "}
                <h2 id="retention" class="text-xl font-semibold mb-3">
                  {" "}
                  9. Data Retention{" "}
                </h2>{" "}
                <p>
                  {" "}
                  We retain your personal information for as long as necessary
                  to provide our services and fulfill the purposes outlined in
                  this Privacy Policy. We may also retain information to comply
                  with legal obligations, resolve disputes, and enforce our
                  agreements.{" "}
                </p>{" "}
              </section>{" "}
              <section aria-labelledby="thirdparty" class="mb-6">
                {" "}
                <h2 id="thirdparty" class="text-xl font-semibold mb-3">
                  {" "}
                  10. Third-Party Links{" "}
                </h2>{" "}
                <p>
                  {" "}
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to review their privacy policies
                  before providing any personal information.{" "}
                </p>{" "}
              </section>{" "}
              <section aria-labelledby="changes" class="mb-6">
                {" "}
                <h2 id="changes" class="text-xl font-semibold mb-3">
                  {" "}
                  11. Changes to This Privacy Policy{" "}
                </h2>{" "}
                <p>
                  {" "}
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new Privacy
                  Policy on this page and updating the "Last Updated" date. Your
                  continued use of our services after any changes constitutes
                  acceptance of the updated Privacy Policy.{" "}
                </p>{" "}
              </section>
            </article>
          </div>
        </main>

        {/* ✅ Footer */}
        <footer className="bg-[#0C1446] text-white text-center py-8 px-4 relative">
          <div className="max-w-6xl mx-auto space-y-4 font-bold">
            <p className="text-sm leading-relaxed">
              <span className="text-yellow-400 font-semibold">Disclaimer:</span>{" "}
              We act as an enquiry service or marketing service partner only
              Manipal University or Online Manipal holds full rights to request
              change or removal of any irrelevant content. Icons or Images used
              are for illustrative purposes and do not directly represent the
              respective colleges or university.
            </p>

            <p className="text-sm mt-4">
              © {new Date().getFullYear()} All rights reserved- CP |{" "}
              <Link
                to="/privacy-policy"
                className="underline text-yellow-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
