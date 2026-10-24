import { Mail, Clock, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/config';
import { useNavigation } from '../context/NavigationContext';
import InquiryForm from '../components/InquiryForm';

export default function ContactPage() {
  const { selectedService } = useNavigation();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
          <span>Initiate Collaboration</span>
          <span className="text-[#34353A]" aria-hidden="true">/</span>
          <span className="text-[#B9BBC2] font-normal">Direct Studio Channel</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F4EF] tracking-tight leading-tight">
          Start a Project with Othmar Creative Studio
        </h1>
        <p className="text-base sm:text-lg text-[#B9BBC2] leading-relaxed font-light">
          Tell us about what you want to build, what you need to achieve, and where you would like to take your business. We will assess your requirements and respond with architectural guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Studio Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-6">
            <h2 className="font-display text-xl font-bold text-[#F5F4EF]">
              Direct Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-[#B9BBC2] leading-relaxed font-light">
              We respond promptly to all serious project inquiries, outreach messages, and partnership discussions.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${STUDIO_CONFIG.contact.email}`}
                className="p-4 bg-[#101114] border border-[#34353A] hover:border-[#C6FF4D] rounded-xl flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22242A] flex items-center justify-center text-[#C6FF4D]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#B9BBC2] uppercase tracking-wider">
                      Studio Inquiries Inbox
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#F5F4EF] group-hover:text-[#C6FF4D] transition-colors break-all font-mono">
                      {STUDIO_CONFIG.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B9BBC2] group-hover:text-[#C6FF4D] shrink-0" />
              </a>
            </div>
          </div>

          {/* Working Details */}
          <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-4 text-xs text-[#B9BBC2]">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#C6FF4D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F5F4EF] block font-semibold">Response Commitment</strong>
                <span>{STUDIO_CONFIG.contact.responseTime}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-[#34353A]">
              <Globe className="w-4 h-4 text-[#C6FF4D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F5F4EF] block font-semibold">Global Remote Operations</strong>
                <span>{STUDIO_CONFIG.contact.location} ({STUDIO_CONFIG.contact.workingHours})</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-[#34353A]">
              <ShieldCheck className="w-4 h-4 text-[#C6FF4D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F5F4EF] block font-semibold">Direct Communication</strong>
                <span>Direct consultation handled via verified studio email and video conference.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full Inquiry Form */}
        <div className="lg:col-span-7">
          <InquiryForm initialService={selectedService} />
        </div>
      </div>
    </div>
  );
}
