import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Clock, Mail, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Support Works International, Inc.',
  description: 'Complete Privacy Policy and data protection terms for Support Works International, Inc., including CCPA, SMS 10DLC, and California privacy disclosures.',
};

export default function PrivacyPolicyPage() {
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
          <ShieldCheck className="w-4 h-4" />
          <span>Legal &amp; Privacy Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-space">
          Privacy Policy
        </h1>
        <div className="text-xs text-neutral-400 mb-8 pb-6 border-b border-[#1c1c1c] flex items-center gap-2 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#ff3b00]" />
          <span>Effective Date: September 21, 2026 &bull; Support Works International, Inc.</span>
        </div>

        <p className="text-sm text-neutral-300 mb-8 leading-relaxed">
          Support Works International, Inc. (&ldquo;Support Works International,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you provide when using our website, purchasing our services, contacting us, or otherwise interacting with us. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you. By using our website or purchasing our services, you acknowledge the practices described in this Privacy Policy.
        </p>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed font-normal">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">1. Information We Collect</h2>
            <p className="mb-2">
              We may collect information that you voluntarily provide to us when you use our website, purchase a service, contact us, or communicate with our team. Depending on your interaction with us, this may include:
            </p>
            <div className="space-y-3 pl-2">
              <div>
                <h3 className="font-semibold text-white text-xs uppercase tracking-wider font-mono">Contact Information:</h3>
                <p className="text-neutral-400">Full name, email address, telephone or mobile number, mailing or billing address, and business name or professional information when applicable.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white text-xs uppercase tracking-wider font-mono">Account and Service Information:</h3>
                <p className="text-neutral-400">When you request or purchase a service, we may collect information necessary to provide that service, including: service or package selected, project requirements, customer-provided documents and files, website or project information, preferences and instructions, communications relating to your order, and information necessary to complete the requested service.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white text-xs uppercase tracking-wider font-mono">Payment Information:</h3>
                <p className="text-neutral-400">Payments made through our website may be processed by third-party payment service providers (such as Stripe, PayPal, Authorize.net). We generally do not store complete payment card numbers or security codes on our own systems. Customers should review the applicable payment provider&apos;s privacy policy and terms for information regarding how that provider handles payment information.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">2. Information Collected Automatically</h2>
            <p className="mb-2">
              When you visit our website, certain information may be collected automatically through standard web technologies, including IP address, browser type, device type, operating system, pages visited, date and time of visits, referring website, general website usage information, and cookies or similar technologies. This information may be used to operate, maintain, secure, and improve our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">3. Cookies and Similar Technologies</h2>
            <p className="mb-2">
              Our website may use cookies, pixels, tags, analytics tools, and similar technologies to remember website preferences, understand how visitors use our website, improve functionality, measure performance, analyze traffic, improve customer experience, and support security and fraud prevention. You may be able to control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">4. How We Use Your Information</h2>
            <p className="mb-2">We may use information we collect for legitimate business purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Providing requested services and processing and managing orders</li>
              <li>Communicating with customers and responding to questions and support requests</li>
              <li>Providing service updates and delivering purchased services and digital materials</li>
              <li>Processing payments through authorized payment providers</li>
              <li>Managing customer accounts where applicable and improving our website and services</li>
              <li>Maintaining website and system security and preventing fraud, abuse, or unauthorized activity</li>
              <li>Maintaining business and transaction records and complying with applicable legal and regulatory requirements</li>
              <li>Sending promotional communications where permitted and where appropriate consent has been obtained</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-400">
              We do not use customer information for purposes unrelated to our business operations unless permitted or required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">5. Service-Related Communications</h2>
            <p className="mb-2">
              When you purchase a service or contact us, we may use the contact information you provide to communicate with you regarding your order, service, account, project, or customer-support request. These communications may include order confirmations, payment confirmations, service updates, requests for information needed to complete a service, project-related communications, customer-support responses, delivery notifications, or important changes relating to a purchased service.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-neutral-200">
            <h2 className="text-lg font-bold text-[#ff551f] mb-2 font-space">6. SMS / Text Messaging</h2>
            <p className="text-xs sm:text-sm mb-2">
              If you separately choose to receive text messages from Support Works International, Inc., we may use your mobile telephone number to send messages for the purposes described during the consent process, including customer service communications, order or service updates, appointment reminders, or requests for information relating to a service.
            </p>
            <p className="text-xs sm:text-sm mb-2">
              Message frequency may vary. Message and data rates may apply. You may opt out of SMS marketing messages at any time by replying <strong>STOP</strong> to a text message. For assistance, reply <strong>HELP</strong> or contact us directly.
            </p>
            <p className="text-xs text-neutral-300 font-mono">
              We do not sell or rent mobile telephone numbers collected for SMS communications to third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">7. Sharing of Information</h2>
            <p className="mb-2">
              We may share information with service providers and business partners when reasonably necessary to operate our business and provide requested services (e.g. payment processors, website hosting, cloud storage, customer-support platforms, email and SMS telecommunications, security and fraud prevention providers, and professional contractors assisting with delivery). We do not sell customer personal information as a business practice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">8. Third-Party Services and Links</h2>
            <p>
              Our website may contain links to third-party websites, applications, payment providers, or other services. Third-party services operate under their own privacy policies and terms. We are not responsible for the privacy practices, security practices, content, or policies of third-party websites that we do not control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">9. Payment Processing</h2>
            <p>
              When you make a purchase, your payment may be processed through an independent payment service provider. Depending on the payment option available at checkout, the payment provider may collect name, billing information, payment card information, transaction information, and fraud-prevention data. Support Works International, Inc. does not request or require customers to provide complete payment card information through ordinary email, SMS, or customer-support communications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">10. Customer-Provided Files and Information</h2>
            <p>
              Certain services may require customers to provide documents, photographs, website content, project information, or other materials. We use customer-provided materials only as reasonably necessary to provide the requested service, communicate with the customer, maintain business records, or comply with applicable legal requirements. Customers should not provide highly sensitive personal information unless it is specifically necessary for the requested service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">11. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. However, no website, electronic transmission, computer system, or storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">12. Data Retention</h2>
            <p>
              We retain personal information for as long as reasonably necessary to provide requested services, maintain customer and transaction records, resolve disputes, enforce agreements, meet accounting and business requirements, and comply with applicable legal obligations. When information is no longer reasonably required, we delete, anonymize, or securely dispose of it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">13. Your Privacy Choices</h2>
            <p className="mb-2">
              Depending on applicable law, you may have rights concerning your personal information, including the ability to request access, correction, deletion, or information about how personal information is used, or to withdraw consent where processing is based on consent. To make a privacy-related request, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">14. Marketing Communications</h2>
            <p>
              We may send promotional emails or other marketing communications where permitted by applicable law. You can unsubscribe from marketing emails by using the unsubscribe option included in the communication. Opting out of promotional communications does not prevent us from sending necessary service-related or transactional communications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">15. Children&apos;s Privacy</h2>
            <p>
              Our services are intended for adults and businesses and are not directed toward children under the age of 13. We do not knowingly collect personal information from children under 13 through our website. If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">16. International Visitors</h2>
            <p>
              Our business may provide services to customers located in different jurisdictions. If you access our website from outside the United States, your information may be processed or stored in jurisdictions where we or our service providers operate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">17. California Privacy Rights (CCPA)</h2>
            <p>
              California residents may have additional privacy rights under applicable California privacy laws regarding access, correction, deletion, and information on categories of personal data collected and used. We do not discriminate against customers for exercising privacy rights available to them under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">18. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes to our services, business practices, technology, legal requirements, or privacy practices. When we make changes, we will update the &ldquo;Effective Date&rdquo; at the top of this Privacy Policy.
            </p>
          </section>

          <section className="pt-6 border-t border-[#1c1c1c]">
            <h2 className="text-lg font-bold text-white mb-2 font-space">19. Contact Us</h2>
            <p className="text-neutral-400 mb-3">
              If you have questions about this Privacy Policy, want to make a privacy-related request, or have concerns about how your information is handled, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#222222] text-xs space-y-1.5 font-mono">
              <div className="font-bold text-white text-sm">Support Works International, Inc.</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff3b00]" />
                <span>Email: <a href="mailto:info@supportworksinternational.com" className="text-[#ff3b00] underline">info@supportworksinternational.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#ff3b00]" />
                <span>Website: <a href="https://supportworksinternational.com/" className="text-[#ff3b00] underline">https://supportworksinternational.com/</a></span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
