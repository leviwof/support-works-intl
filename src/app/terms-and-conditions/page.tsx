import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, Clock, Mail, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Support Works International, Inc.',
  description: 'Terms and Conditions governing the use of services, websites, and digital products provided by Support Works International, Inc.',
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-[#ff551f] mb-8 transition-colors font-mono"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="revond-card rounded-3xl p-8 sm:p-12 border border-[#1e1e1e] shadow-2xl bg-[#090909]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#ff3b00] uppercase tracking-wider mb-2 font-mono">
          <FileText className="w-4 h-4" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-space">
          Terms &amp; Conditions
        </h1>
        <div className="text-xs text-neutral-400 mb-8 pb-6 border-b border-[#1c1c1c] flex items-center gap-2 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#ff3b00]" />
          <span>Last Updated: September 21, 2026 &bull; Support Works International, Inc.</span>
        </div>

        <p className="text-sm text-neutral-300 mb-8 leading-relaxed">
          Welcome to Support Works International, Inc. (&ldquo;Support Works International,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms &amp; Conditions govern your use of our website, <a href="https://supportworksinternational.com/" className="text-[#ff3b00] underline">https://supportworksinternational.com/</a> (the &ldquo;Website&rdquo;), and your purchase or use of our technology, website, digital, consultation, and training services. By accessing our Website, purchasing a service, submitting information to us, or engaging us to provide a service, you acknowledge that you have read, understood, and agree to these Terms &amp; Conditions.
        </p>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed font-normal">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">1. About Support Works International</h2>
            <p>
              Support Works International, Inc. provides practical technology and digital services to individuals, professionals, entrepreneurs, and small businesses across four primary areas: Technology Support, Website Services, Digital Services, and Consultation &amp; Training.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">2. Service Purchases</h2>
            <p>
              Customers may purchase individual services or bundled packages. Unless stated otherwise, our services are offered as one-time purchases. Purchasing one service does not automatically enroll the customer in a subscription or recurring payment arrangement. If a customer requires additional services in the future, a separate order may be placed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">3. Service Descriptions and Scope</h2>
            <p>
              We describe our services accurately. The actual scope depends on customer requirements, supplied files, system conditions, access provided, and technical limitations. Our commitment is to communicate the scope clearly and deliver the agreed work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">4. Customer Responsibilities</h2>
            <p>
              Customers are responsible for providing accurate, complete, and timely information, materials, copy, images, and necessary access required to perform the service. Delays in providing materials may affect completion timelines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">5. Customer-Provided Content and Materials</h2>
            <p>
              Customers represent that they have the necessary rights and permissions to use all provided materials. We use customer materials strictly as necessary to provide the service and protect customer information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">6. Technology Support Services</h2>
            <p>
              Includes computer troubleshooting, software setup, email/cloud configuration, and basic security reviews. We do not guarantee resolution for defective hardware or unsupported software. Customers are responsible for maintaining backups before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">7. Website Services</h2>
            <p>
              Includes troubleshooting, updates, development, WordPress setup, landing pages, speed optimization, and SEO audits. External costs such as third-party hosting, domains, and premium plugins are not included unless expressly specified.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">8. Website Development and Deliverables</h2>
            <p>
              Deliverables are provided according to the agreed project scope. Unless expressly agreed otherwise, website development does not include unlimited revisions, ongoing maintenance, or unlimited content changes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">9. SEO Services</h2>
            <p>
              SEO services improve website structure and on-page presentation. We do not guarantee specific search engine rankings, algorithmic placements, traffic, or sales, as search engines independently determine indexing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">10. Digital Services</h2>
            <p>
              Includes resume/CV preparation, LinkedIn optimization, document design, presentations, and portfolios. Customers are responsible for reviewing completed materials for accuracy before distributing or publishing them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">11. Consultation and Training Services</h2>
            <p>
              Delivered via remote sessions. Customers are responsible for having appropriate internet access, hardware, and attending scheduled sessions. Rescheduling requests should be submitted in advance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">12. Bundled Service Packages</h2>
            <p>
              Bundled packages combine selected services at fixed package rates as described on the website. Elements of bundled packages cannot be substituted unless agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">13. Pricing and Payments</h2>
            <p>
              Prices are displayed on the website. Payments are processed through third-party payment providers. Full payment is required before service commencement unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">14. Currency</h2>
            <p>
              All prices are quoted and charged in U.S. Dollars (USD) unless expressly stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">15. Order Acceptance and Confirmation</h2>
            <p>
              An order is accepted when payment is received and an electronic confirmation is issued. We reserve the right to decline or cancel an order if requirements cannot reasonably be met.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">16. Customer Access and Credentials</h2>
            <p>
              Customers should provide temporary access credentials only when strictly necessary and must change passwords promptly upon service completion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">17. Data Backup Responsibility</h2>
            <p>
              Customers are solely responsible for creating and maintaining independent backups of all files, databases, and emails prior to technical service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">18. Service Delivery and Completion</h2>
            <p>
              Services are primarily delivered electronically or remotely. A service is complete when agreed tasks or digital files have been provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">19. Revisions and Modifications</h2>
            <p>
              Revisions included in the scope of a purchased service will be completed accordingly. Scope changes or additional tasks require a separate service purchase.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">20. Third-Party Software and Platforms</h2>
            <p>
              We are not responsible for outages, API changes, or limitations caused by third-party hosting, registrar, or platform providers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">21. Refunds, Cancellations, and Service Inquiries</h2>
            <p>
              Where work has already started, refunds are evaluated based on work performed, costs incurred, and applicable law. Substantially completed digital deliverables or held consultation sessions are generally non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">22. Customer Satisfaction and Service Issues</h2>
            <p>
              We encourage customers to contact us promptly if a service does not match the agreed scope so we can investigate and make reasonable adjustments where appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">23. Intellectual Property</h2>
            <p>
              Upon full payment, the customer owns final custom deliverables. Support Works International, Inc. retains rights to pre-existing templates, code frameworks, and proprietary know-how.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">24. Customer Content Rights</h2>
            <p>
              Customers retain ownership of content provided to us and represent that such materials do not infringe any third-party copyright, trademark, or privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">25. Confidentiality</h2>
            <p>
              We treat customer information with strict confidentiality and use it solely to perform requested services and comply with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">26. Security and Account Access</h2>
            <p>
              Customers should not provide unnecessary credentials. We are not responsible for security issues caused by customer-controlled passwords or third-party networks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">27. No Professional or Legal Advice</h2>
            <p>
              Our services are practical technology, digital, and coaching services. They do not constitute licensed legal, accounting, tax, or medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">28. No Guaranteed Business or Financial Results</h2>
            <p>
              We do not guarantee specific employment hiring, job interviews, revenue targets, sales, or search engine rankings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">29. Acceptable Use</h2>
            <p>
              You agree not to use our Website or services for unlawful purposes, fraud, infringement, malware distribution, or unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">30. Website Availability</h2>
            <p>
              We make reasonable efforts to maintain website availability, but do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">31. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Support Works International, Inc. will not be liable for indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">32. Force Majeure</h2>
            <p>
              We are not responsible for delays or failure to perform caused by circumstances beyond reasonable control, including natural disasters, utility outages, or cyber incidents.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">33. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Support Works International, Inc. from claims, losses, and damages arising from violation of these Terms or misuse of our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">34. Changes to Services and Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of our Website following updates constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">35. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of the jurisdiction in which Support Works International, Inc. is organized.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">36. Severability</h2>
            <p>
              If any provision is found invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">37. Entire Agreement</h2>
            <p>
              These Terms &amp; Conditions, together with our Privacy Policy and other published policies, constitute the entire agreement between you and Support Works International, Inc.
            </p>
          </section>

          <section className="pt-6 border-t border-[#1c1c1c]">
            <h2 className="text-lg font-bold text-white mb-2 font-space">38. Contact Us</h2>
            <p className="text-neutral-400 mb-3">
              If you have questions regarding these Terms &amp; Conditions, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#222222] text-xs space-y-1.5 font-mono">
              <div className="font-bold text-white text-sm">Support Works International, Inc.</div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#ff3b00]" />
                <span>Website: <a href="https://supportworksinternational.com/" className="text-[#ff3b00] underline">https://supportworksinternational.com/</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff3b00]" />
                <span>Email: <a href="mailto:info@supportworksinternational.com" className="text-[#ff3b00] underline">info@supportworksinternational.com</a></span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
