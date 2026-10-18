import React from 'react';
import Link from 'next/link';
import { Truck, ArrowLeft, Clock, Mail, Globe, Laptop, Send } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Delivery Policy | Support Works International, Inc.',
  description: 'Digital service fulfillment guidelines, remote sessions, turnaround timelines, and delivery protocols for Support Works International, Inc.',
};

export default function ServiceDeliveryPage() {
  return (
    <div className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c] hover:text-[#c2410c] mb-8 transition-colors font-mono"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="gower-card rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm bg-white">
        <div className="flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-2 font-mono">
          <Truck className="w-4 h-4" />
          <span>Fulfillment &amp; Digital Delivery</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 font-space">
          Service Delivery &amp; Digital Delivery Policy
        </h1>
        <div className="text-xs text-slate-500 mb-8 pb-6 border-b border-slate-200 flex items-center gap-2 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>Last Updated: September 21, 2026 &bull; Support Works International, Inc.</span>
        </div>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          At Support Works International, Inc., we provide practical technology, website, digital, consultation, and training services to individuals, professionals, entrepreneurs, and small businesses. Because our services are primarily digital and service-based, most orders do not involve the shipment of physical products. This Service Delivery &amp; Digital Delivery Policy explains how our services, consultations, training sessions, and digital deliverables are provided to customers.
        </p>

        <div className="space-y-8 text-sm text-slate-600 leading-relaxed font-normal">
          
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">1. Service-Based Delivery</h2>
            <p className="mb-2">
              Our services are primarily delivered electronically, remotely, or through scheduled consultation and training sessions. Depending on the service purchased, delivery may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Remote technology assistance</li>
              <li>Online consultation and online training</li>
              <li>Website development or updates</li>
              <li>Digital document preparation and design work</li>
              <li>Electronic document delivery and digital portfolio development</li>
              <li>Website-related services and SEO audits or optimization work</li>
              <li>Other digital services included in the customer&apos;s order</li>
            </ul>
            <p className="mt-2 text-xs text-slate-600 font-mono">
              Our services are primarily offered as one-time purchases, and customers are not required to maintain a subscription to receive our standard services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">2. Service Processing</h2>
            <p className="mb-2">
              After successful payment, we will review the order and the information provided by the customer. Depending on the service, we may contact the customer to confirm service requirements, request additional information or files, schedule a consultation or training session, obtain website or software access where necessary, or clarify the scope of work. The time required to begin a service may vary depending on the nature and complexity of the service and the information required from the customer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">3. Consultation and Training Services</h2>
            <p className="mb-2">
              Consultation and training services may be delivered through an online or remote session (e.g., Technology Consultation, Digital Skills Consultation, Computer Skills Training, Microsoft Office Training, Excel Training, Programming Consultation, Website Management Training, and Digital Productivity Training).
            </p>
            <p>
              Where a service requires an appointment, the customer will be provided with scheduling information or contacted to arrange a suitable time. Customers are responsible for attending scheduled sessions and having the necessary equipment, internet connection, software, and access required for the session.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">4. Website Services</h2>
            <p className="mb-2">
              Website services may be delivered through remote access, online communication, digital file transfer, website access, or direct implementation on the customer&apos;s website (including website troubleshooting, content updates, speed optimization, WordPress setup, landing page development, personal/professional websites, redesigns, and SEO audits/optimization).
            </p>
            <p>
              Completion times vary depending on the service purchased, project requirements, customer responsiveness, website condition, and third-party systems involved.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">5. Digital Deliverables</h2>
            <p className="mb-2">
              Services involving digital deliverables may be delivered electronically, including resumes and CVs, professional documents, presentations, digital portfolios, graphics, edited photographs, digital files, and website-related files. Completed materials may be provided by email, electronic file transfer, shared access, website publication, or another appropriate digital delivery method.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">6. Customer Information and Materials</h2>
            <p className="mb-2">
              Customers are responsible for providing accurate and complete information required to perform the requested service (text, images, resume details, credentials, or technical information). Delays in providing required information or access may delay the delivery of the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">7. Delivery Timeframes</h2>
            <p className="mb-2">
              Service delivery times vary depending on the type of service purchased. Simple consultations and training sessions may be scheduled relatively quickly, while website development, redesign, digital portfolio projects, and other customized services may require additional time. Any delivery timeframe communicated to the customer is an estimate unless a specific completion date has been expressly agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">8. Customer Delays</h2>
            <p>
              A customer&apos;s failure to provide required information, files, approvals, access, or responses may delay service completion. We are not responsible for delays caused by incomplete or delayed customer information. Where appropriate, we may pause work until the required information or access is provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">9. Service Completion</h2>
            <p>
              A service is generally considered delivered when the agreed service has been performed or the agreed digital deliverable has been provided (e.g. completion of a consultation/training session, agreed troubleshooting, delivery of completed document/presentation/design, or completion of agreed website work).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">10. Revisions</h2>
            <p>
              Where revisions are included in the purchased service, they will be handled according to the scope of that service. A request that substantially changes the original requirements or adds new work may be treated as an additional service requiring a separate purchase.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-slate-700">
            <h2 className="text-lg font-bold text-[#ea580c] mb-2 font-space">11. Physical Products (No Physical Shipping)</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              Support Works International, Inc.&apos;s services are primarily service-based and digital. Unless a specific service expressly states otherwise, we do not ship physical products as part of our standard services. Accordingly, standard service purchases do not involve physical shipping charges, shipping carrier delivery, tracking numbers, or physical package delivery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">12. Third-Party Platforms</h2>
            <p className="mb-2">
              Some services may depend on third-party platforms, hosting providers, cloud services, software, domain registrars, or APIs. We are not responsible for delivery delays or service interruptions caused by third-party systems outside our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">13. Digital Delivery Problems</h2>
            <p>
              If you believe that a digital deliverable was not received, is incomplete, or cannot be accessed, please contact us promptly with your order information, email address, and service name. We will make reasonable efforts to resend or provide access to the deliverable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">14. Email Delivery</h2>
            <p>
              Customers are responsible for providing an accurate email address and checking spam/junk folders if an expected communication is not received. We are not responsible for delivery issues caused by mailbox quotas or customer email filtering.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">15. Remote Access</h2>
            <p>
              Certain services may require remote access or credentials. Customers should provide only necessary access and should change temporary credentials promptly after service completion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 font-space">16. Service Availability</h2>
            <p>
              We make reasonable efforts to provide services within communicated timelines, but delivery may be affected by circumstances beyond reasonable control such as widespread network outages, cybersecurity incidents, or natural disasters.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-2 font-space">17. Contact Us</h2>
            <p className="text-slate-600 mb-3">
              For questions regarding service delivery, digital deliverables, consultation scheduling, or an order, please contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 font-mono">
              <div className="font-bold text-slate-900 text-sm">Support Works International, Inc.</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Email: <a href="mailto:info@supportworksinternational.com" className="text-[#ea580c] underline">info@supportworksinternational.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Website: <a href="https://supportworksinternational.com/" className="text-[#ea580c] underline">https://supportworksinternational.com/</a></span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
