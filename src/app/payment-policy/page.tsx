import React from 'react';
import Link from 'next/link';
import { CreditCard, ArrowLeft, Clock, ShieldCheck, Mail, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Policy | Support Works International, Inc.',
  description: 'Complete Payment Policy, authorization procedures, billing practices, descriptors, and refund terms for Support Works International, Inc.',
};

export default function PaymentPolicyPage() {
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
          <CreditCard className="w-4 h-4" />
          <span>Billing &amp; Merchant Standards</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-space">
          Payment Policy
        </h1>
        <div className="text-xs text-neutral-400 mb-8 pb-6 border-b border-[#1c1c1c] flex items-center gap-2 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#ff3b00]" />
          <span>Effective Date: September 21, 2026 &bull; Support Works International, Inc.</span>
        </div>

        <p className="text-sm text-neutral-300 mb-8 leading-relaxed">
          This Payment Policy explains the payment methods, authorization procedures, billing practices, and payment-related terms applicable to purchases made through Support Works International, Inc. (&ldquo;Support Works International,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By placing an order through our website, you acknowledge and agree to the payment practices described below.
        </p>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed font-normal">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">1. One-Time Service Payments</h2>
            <p className="mb-2">
              Support Works International, Inc. primarily provides services on a one-time purchase basis. When you select a service or bundled package, the applicable price will be displayed before you complete your purchase. Unless otherwise stated at the time of purchase:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>The payment is a one-time charge.</li>
              <li>No automatic recurring subscription is required.</li>
              <li>Future services require a separate purchase.</li>
              <li>Customers are not automatically charged for additional services.</li>
              <li>Purchasing one service does not authorize us to charge the customer for unrelated future services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">2. Service Pricing</h2>
            <p className="mb-2">
              Prices for our services and packages are displayed on our website in U.S. Dollars (USD) unless otherwise stated. The applicable price is the price displayed at the time the order is submitted.
            </p>
            <p>
              Prices may change from time to time. Any price changes will not affect an order that has already been successfully placed and confirmed, except where an adjustment is required due to an obvious pricing error or other circumstances permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">3. Accepted Payment Methods</h2>
            <p className="mb-2">
              Depending on availability, customers may be able to pay using major credit cards, debit cards, digital wallets, or other payment methods displayed at checkout. Payment processing may be provided by independent third-party payment service providers, which may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Stripe</li>
              <li>PayPal</li>
              <li>Authorize.net</li>
              <li>Other payment providers made available through our checkout system</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-400">
              The payment methods available to a particular customer may vary based on location, transaction circumstances, payment-provider availability, and other factors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">4. Payment Authorization</h2>
            <p className="mb-2">
              When you submit a payment, you authorize the applicable payment provider to process the transaction for the amount displayed at checkout. You represent that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>The payment information you provide is accurate and authorized for your use.</li>
              <li>You are authorized to use the selected payment method.</li>
              <li>The information provided during checkout is complete and accurate.</li>
              <li>You will not intentionally submit fraudulent or unauthorized payment information.</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-400">
              We may use payment-provider security and fraud-prevention systems to review transactions and help protect customers and our business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">5. Payment Verification</h2>
            <p className="mb-2">
              In certain circumstances, additional verification may be required before an order can be processed. This may occur when:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>A transaction requires additional payment-provider verification.</li>
              <li>Information provided during checkout needs clarification.</li>
              <li>A transaction triggers a security or fraud-prevention review.</li>
              <li>The selected payment method requires additional authorization.</li>
              <li>We reasonably need additional information to process the order.</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-400">
              If additional verification is required, we may contact the customer using the contact information provided during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">6. Payment Confirmation</h2>
            <p className="mb-2">
              After a successful payment, customers may receive an electronic confirmation containing relevant transaction or order information.
            </p>
            <p>
              A payment confirmation indicates that the payment has been received or authorized by the applicable payment provider. It does not necessarily mean that the requested service has already been completed. Service fulfillment will begin according to the applicable service description and any additional information communicated to the customer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">7. Payment Processing Delays</h2>
            <p className="mb-2">
              Occasionally, a payment may remain pending due to circumstances outside our direct control, including bank processing delays, payment-provider verification, card issuer authorization, fraud-prevention reviews, technical issues, payment-provider outages, or other banking or payment-network processes.
            </p>
            <p>
              Customers should not submit duplicate payments while an earlier payment is still pending unless instructed to do so by Support Works International, Inc. or the applicable payment provider. If you believe you may have submitted more than one payment for the same order, please contact us at <a href="mailto:info@supportworksinternational.com" className="text-[#ff3b00] underline">info@supportworksinternational.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">8. Failed or Declined Payments</h2>
            <p className="mb-2">
              A payment may be declined by the card issuer, bank, payment provider, or payment network. Support Works International, Inc. does not control the authorization decisions of banks, card issuers, or independent payment providers. If a payment is declined, customers may:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Verify their billing information.</li>
              <li>Contact their card issuer or bank.</li>
              <li>Try another available payment method.</li>
              <li>Contact us for assistance.</li>
            </ul>
            <p className="mt-2 font-mono text-xs text-neutral-400">
              We do not request complete payment-card information through ordinary email or SMS.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">9. Billing Information</h2>
            <p className="mb-2">
              Customers are responsible for providing accurate billing information during checkout. Incorrect information may result in payment failure, additional verification, order delays, payment-provider review, or cancellation of an order. If your billing information has changed, please ensure that the information provided during checkout is current and accurate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">10. Billing Descriptor</h2>
            <p className="mb-2">
              Depending on the payment method and payment-processing arrangement, transactions may appear on a customer&apos;s bank or card statement under a business or payment descriptor associated with <strong>Support Works International, Inc.</strong> or the applicable payment processor. The exact descriptor displayed may vary by payment method, card issuer, bank, or payment provider.
            </p>
            <p>
              If you do not recognize a transaction that appears to be associated with Support Works International, Inc., please contact us at <a href="mailto:info@supportworksinternational.com" className="text-[#ff3b00] underline">info@supportworksinternational.com</a>. We will assist in identifying the transaction.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-neutral-200">
            <h2 className="text-lg font-bold text-[#ff551f] mb-2 flex items-center gap-2 font-space">
              <ShieldCheck className="w-5 h-5 text-[#ff3b00]" />
              <span>11. Payment Security</span>
            </h2>
            <p className="text-xs sm:text-sm">
              Payment-card information is processed through payment service providers and payment infrastructure designed to protect payment information. We do not ask customers to send complete card numbers, CVV/security codes, passwords, or other sensitive payment credentials through email, SMS, or ordinary customer-support communications. Customers should never provide such information in response to an unsolicited message claiming to represent Support Works International, Inc.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">12. Third-Party Payment Providers</h2>
            <p className="mb-2">
              Payments may be processed by independent third-party payment providers who maintain their own Terms of Service, Privacy Policies, security procedures, fraud-prevention procedures, and authorization requirements. Customers should review the applicable provider&apos;s terms and policies when using a third-party payment method. Support Works International, Inc. is not responsible for payment-provider policies or decisions that are outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">13. Refunds and Cancellations</h2>
            <p className="mb-2">
              Refunds and cancellations are governed by our Refund &amp; Cancellation Policy. Certain services may become non-refundable or partially refundable once work has commenced, depending on the nature of the service and the amount of work already performed. Customers should review our Refund &amp; Cancellation terms before purchasing a service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">14. Duplicate Payments</h2>
            <p className="mb-2">
              If you believe you have accidentally paid for the same service more than once, please contact us as soon as possible with your name, order number (if available), date of payment, amount charged, and email address used for the purchase. We will review the transaction and determine the appropriate resolution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">15. Chargebacks and Payment Disputes</h2>
            <p className="mb-2">
              If you have a question or concern regarding a payment, we encourage you to contact us before initiating a payment dispute or chargeback. We will make reasonable efforts to investigate payment concerns and resolve legitimate issues. Customers should provide relevant order information so that we can review the transaction efficiently. Nothing in this section limits any rights available to customers under applicable law or card-network rules.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">16. Taxes and Additional Charges</h2>
            <p>
              Where applicable, taxes or other charges required by law may be added to the purchase price and displayed at checkout. Any applicable charges will be presented to the customer before the payment is submitted, where reasonably practicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 font-space">17. Changes to This Payment Policy</h2>
            <p>
              We may update this Payment Policy from time to time to reflect changes to our services, payment methods, payment providers, business practices, or applicable legal requirements. The updated policy will be published on this page with a revised effective date.
            </p>
          </section>

          <section className="pt-6 border-t border-[#1c1c1c]">
            <h2 className="text-lg font-bold text-white mb-2 font-space">18. Contact Us</h2>
            <p className="text-neutral-400 mb-3">
              If you have questions about a payment, billing issue, transaction, or payment-related concern, please contact us:
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
              <div className="text-neutral-500 pt-1 text-[11px]">
                We recommend including your order number, transaction date, and the email address used for the purchase when contacting us about a payment.
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
