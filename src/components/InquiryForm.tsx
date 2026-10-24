import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { STUDIO_CONFIG, STUDIO_SERVICES } from '../data/config';
import { InquiryFormData } from '../types';

interface InquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Not sure yet',
];

const TIMELINE_OPTIONS = [
  'Urgent (Under 2 weeks)',
  'Standard (2–4 weeks)',
  'Medium-term (1–2 months)',
  'Flexible / Planning Phase',
];

export default function InquiryForm({ initialService }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    websiteUrl: '',
    service: initialService || STUDIO_SERVICES[0].title,
    projectDescription: '',
    budget: '$1,000 – $2,500',
    timeline: 'Standard (2–4 weeks)',
    additionalRequirements: '',
    consentPrivacy: false,
  });

  // Honeypot spam protection
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'unconfigured' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [inquiryRef, setInquiryRef] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project requirements.';
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Please provide at least 20 characters so we can understand your scope.';
    }

    if (!formData.consentPrivacy) {
      newErrors.consentPrivacy = 'Please confirm consent to proceed with project inquiry communication.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (honeypot) {
      setStatus('error');
      setStatusMessage('Submission flagged as automated.');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    // Generate unique inquiry reference for client tracking
    const ref = `INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryRef(ref);

    try {
      // Call server-side /api/inquiry endpoint
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryRef: ref }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setStatus('submitted');
          setStatusMessage(
            `Your inquiry has been successfully transmitted (Reference: ${ref}). We will review your requirements and respond to ${formData.email} within 24–48 hours.`
          );
          return;
        }
      }

      // If backend returns 501 unconfigured, report honestly
      setStatus('unconfigured');
      setStatusMessage(
        `The transactional email provider (RESEND_API_KEY) is not yet set in server environment variables. Your inquiry (Reference: ${ref}) has been preserved below so you can email us directly with a single click.`
      );
    } catch {
      // Client-side fallback
      setStatus('unconfigured');
      setStatusMessage(
        `Backend service unreachable. Your inquiry (Reference: ${ref}) details have been preserved so you can transmit directly via email.`
      );
    }
  };

  const mailtoBody = encodeURIComponent(
    `Hello Othmar Creative Studio,\n\nReference: ${inquiryRef || 'INQ-DIRECT'}\nName: ${formData.fullName}\nCompany: ${formData.companyName || 'Not specified'}\nEmail: ${formData.email}\nWebsite: ${formData.websiteUrl || 'Not specified'}\nService Required: ${formData.service}\nEstimated Budget: ${formData.budget}\nPreferred Timeline: ${formData.timeline}\n\nProject Scope & Objectives:\n${formData.projectDescription}\n\nAdditional Notes:\n${formData.additionalRequirements || 'None'}`
  );

  return (
    <div className="bg-[#22242A] border border-[#34353A] rounded-2xl p-6 md:p-10 text-[#F5F4EF]">
      {status === 'submitted' ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-[#C6FF4D]/10 text-[#C6FF4D] rounded-full flex items-center justify-center mx-auto border border-[#C6FF4D]/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">Inquiry Transmitted</h3>
          <p className="font-mono text-xs text-[#C6FF4D]">Reference: {inquiryRef}</p>
          <p className="text-sm md:text-base text-[#B9BBC2] max-w-lg mx-auto leading-relaxed font-light">
            {statusMessage}
          </p>
          <div className="pt-6">
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  fullName: '',
                  companyName: '',
                  email: '',
                  websiteUrl: '',
                  service: STUDIO_SERVICES[0].title,
                  projectDescription: '',
                  budget: '$1,000 – $2,500',
                  timeline: 'Standard (2–4 weeks)',
                  additionalRequirements: '',
                  consentPrivacy: false,
                });
              }}
              className="px-6 py-2.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Unconfigured Honest Notice if triggered */}
          {status === 'unconfigured' && (
            <div className="p-5 bg-[#101114] border border-[#34353A] rounded-xl space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C6FF4D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#F5F4EF]">
                    Direct Transmission Channel
                  </h4>
                  <p className="text-xs text-[#B9BBC2] leading-relaxed font-light">
                    {statusMessage}
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`mailto:${STUDIO_CONFIG.contact.email}?subject=${encodeURIComponent(
                    `New Project Inquiry — Othmar Creative Studio (${formData.service} - ${formData.fullName})`
                  )}&body=${mailtoBody}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Directly via Email Client ({STUDIO_CONFIG.contact.email})</span>
                </a>
              </div>
            </div>
          )}

          {/* Honeypot Spam Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Leave this empty</label>
            <input
              id="hp_field"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Your Name <span className="text-[#C6FF4D]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Elena Rostova"
                className={`w-full px-4 py-3 bg-[#101114] border rounded-lg text-sm text-[#F5F4EF] placeholder-[#B9BBC2]/50 focus:border-[#C6FF4D] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#34353A]'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-400">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Email Address <span className="text-[#C6FF4D]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@company.com"
                className={`w-full px-4 py-3 bg-[#101114] border rounded-lg text-sm text-[#F5F4EF] placeholder-[#B9BBC2]/50 focus:border-[#C6FF4D] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#34353A]'
                }`}
              />
              {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Business / Company Name */}
            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Business or Entity <span className="text-xs text-[#B9BBC2] font-normal">(Optional)</span>
              </label>
              <input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="e.g. Rostova Design Partners"
                className="w-full px-4 py-3 bg-[#101114] border border-[#34353A] rounded-lg text-sm text-[#F5F4EF] placeholder-[#B9BBC2]/50 focus:border-[#C6FF4D] transition-colors"
              />
            </div>

            {/* Current Website URL */}
            <div className="space-y-2">
              <label htmlFor="websiteUrl" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Current Website URL <span className="text-xs text-[#B9BBC2] font-normal">(Optional)</span>
              </label>
              <input
                id="websiteUrl"
                type="url"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-4 py-3 bg-[#101114] border border-[#34353A] rounded-lg text-sm text-[#F5F4EF] placeholder-[#B9BBC2]/50 focus:border-[#C6FF4D] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Required Service */}
            <div className="space-y-2">
              <label htmlFor="service" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Service Required <span className="text-[#C6FF4D]">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-[#101114] border border-[#34353A] rounded-lg text-sm text-[#F5F4EF] focus:border-[#C6FF4D] transition-colors cursor-pointer"
              >
                {STUDIO_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.title} className="bg-[#101114] text-[#F5F4EF]">
                    {srv.title}
                  </option>
                ))}
                <option value="WordPress Website Design or Redesign" className="bg-[#101114] text-[#F5F4EF]">
                  WordPress Website Design or Redesign
                </option>
                <option value="Website Maintenance Retainer" className="bg-[#101114] text-[#F5F4EF]">
                  Website Maintenance Retainer
                </option>
                <option value="Website Troubleshooting & Repairs" className="bg-[#101114] text-[#F5F4EF]">
                  Website Troubleshooting & Repairs
                </option>
              </select>
            </div>

            {/* Estimated Budget */}
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Estimated Budget (USD) <span className="text-[#C6FF4D]">*</span>
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 bg-[#101114] border border-[#34353A] rounded-lg text-sm text-[#F5F4EF] focus:border-[#C6FF4D] transition-colors cursor-pointer"
              >
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b} className="bg-[#101114] text-[#F5F4EF]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Timeline */}
            <div className="space-y-2">
              <label htmlFor="timeline" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
                Target Timeline <span className="text-[#C6FF4D]">*</span>
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 bg-[#101114] border border-[#34353A] rounded-lg text-sm text-[#F5F4EF] focus:border-[#C6FF4D] transition-colors cursor-pointer"
              >
                {TIMELINE_OPTIONS.map((t) => (
                  <option key={t} value={t} className="bg-[#101114] text-[#F5F4EF]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label htmlFor="projectDescription" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
              Project Overview & Goals <span className="text-[#C6FF4D]">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              placeholder="Tell us what you are building, your primary goals, key features, and any reference sites you admire..."
              className={`w-full px-4 py-3 bg-[#101114] border rounded-lg text-sm text-[#F5F4EF] placeholder-[#B9BBC2]/50 focus:border-[#C6FF4D] transition-colors resize-y ${
                errors.projectDescription ? 'border-red-500' : 'border-[#34353A]'
              }`}
            />
            {errors.projectDescription && (
              <p className="text-xs text-red-400">{errors.projectDescription}</p>
            )}
          </div>

          {/* Additional Requirements */}
          <div className="space-y-2">
            <label htmlFor="additionalRequirements" className="block text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
              Additional Requirements or Notes <span className="text-xs text-[#B9BBC2] font-normal">(Optional)</span>
            </label>
            <input
              id="additionalRequirements"
              type="text"
              value={formData.additionalRequirements}
              onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
              placeholder="e.g. Existing Stripe account, Figma designs ready, specific hosting preference..."
              className="w-full px-4 py-3 bg-[#101114] border border-[#34353A] rounded-lg text-sm text-[#F5F4EF] placeholder-[#B9BBC2]/50 focus:border-[#C6FF4D] transition-colors"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="space-y-2 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consentPrivacy}
                onChange={(e) => setFormData({ ...formData, consentPrivacy: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-[#34353A] bg-[#101114] text-[#C6FF4D] focus:ring-[#C6FF4D] cursor-pointer"
              />
              <span className="text-xs text-[#B9BBC2] leading-relaxed font-light">
                I agree to allow Othmar Creative Studio to store and process the submitted information to respond to this project inquiry. No spam or commercial data sharing.
              </span>
            </label>
            {errors.consentPrivacy && (
              <p className="text-xs text-red-400">{errors.consentPrivacy}</p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#B9BBC2]">
              Typical response window: <span className="text-[#F5F4EF] font-medium">&lt; 24–48 hours</span>
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wide text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] disabled:opacity-50 transition-all rounded-md shadow-sm active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>{status === 'submitting' ? 'Transmitting Inquiry...' : 'Submit Project Inquiry'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
