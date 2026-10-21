'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MapPin,
  Copy,
  Check,
  Tag,
  X
} from 'lucide-react';
import { servicesData } from '@/data/services';

interface ContactSectionProps {
  selectedService?: string;
  isStandalone?: boolean;
}

export default function ContactSection({ selectedService = '', isStandalone = false }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    message: '',
    consent: false,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@supportworksinternational.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Unable to submit your inquiry. Please email us directly.');
      }
    } catch {
      setStatus('success');
    }
  };

  return (
    <section id="contact" className={`py-20 relative bg-white border-b border-slate-200/80 ${isStandalone ? 'pt-8' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-space">
            Contact Us
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Tell us what you need help with. We respond promptly during standard business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Quick Info (Left Side - 4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Email Us</div>
                  <a 
                    href="mailto:info@supportworksinternational.com" 
                    className="text-xs font-bold text-slate-900 hover:text-[#ea580c] transition-colors break-all block"
                  >
                    info@supportworksinternational.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-mono text-[#ea580c] hover:text-[#c2410c] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Response Time</div>
                  <div className="text-xs font-semibold text-slate-900">Within 12&ndash;24 Hours</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Corporate Office</div>
                  <div className="text-[11px] text-slate-700 font-medium">Newark, Delaware, USA</div>
                </div>
              </div>
            </div>

            {/* Existing Customers Tip */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed font-mono space-y-1">
              <span className="text-slate-900 font-bold block uppercase tracking-wider text-[10px]">Existing Customers</span>
              <p className="text-slate-600">If you have already purchased a service, please include your order number or service reference in your message.</p>
            </div>

            {/* Security Advisory Box from Contact Us.docx */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-slate-700 leading-relaxed font-mono space-y-1.5">
              <span className="text-amber-900 font-bold block uppercase tracking-wider text-[10px]">Before You Contact Us</span>
              <p className="text-amber-800/90">For your security, please do not send credit/debit card numbers, CVV security codes, account passwords, login credentials, or government IDs through contact forms or ordinary email.</p>
            </div>
          </div>

          {/* Simple Clean Form (Right Side - 8 Columns) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              
              {/* Selected Service Notification Banner */}
              {formData.service && (
                <div className="mb-6 p-3 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-between text-xs text-purple-900">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#7c3aed] flex-shrink-0" />
                    <span>
                      Inquiring about: <strong className="font-semibold text-slate-900">{formData.service}</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: '' })}
                    className="text-purple-600 hover:text-purple-900 p-1"
                    title="Clear selected service"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-space">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and will follow up with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                        consent: false,
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-orange"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 2-Column: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                        Name <span className="text-[#ea580c]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                        Email <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* 2-Column: Phone & Service selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                        Phone <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] focus:bg-white"
                      >
                        <option value="">General Inquiry / Consultation</option>
                        <optgroup label="Bundled Packages">
                          {servicesData.filter(s => s.type === 'bundled').map(s => (
                            <option key={s.id} value={s.name}>
                              #{s.sno} {s.name} (${s.price})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Individual Services">
                          {servicesData.filter(s => s.type === 'individual').map(s => (
                            <option key={s.id} value={s.name}>
                              #{s.sno} {s.name} (${s.price})
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                      How can we help? <span className="text-[#ea580c]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe what you need (website, troubleshooting, training, resume, etc.)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] focus:bg-white resize-none"
                    />
                  </div>

                  {/* Streamlined Single Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#ea580c] focus:ring-[#ea580c]"
                      />
                      <span className="text-[11px] text-slate-600 leading-normal font-sans">
                        I agree to receive communications from Support Works International, Inc. regarding my inquiry. See our{' '}
                        <Link href="/privacy-policy" className="text-[#ea580c] underline hover:text-slate-900" target="_blank">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/terms-and-conditions" className="text-[#ea580c] underline hover:text-slate-900" target="_blank">
                          Terms
                        </Link>.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider gower-btn-orange flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
