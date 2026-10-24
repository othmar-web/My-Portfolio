import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { STUDIO_CONFIG } from '../data/config';

export default function PrivacyPage() {
  const { navigate } = useNavigation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20 space-y-12">
      <div>
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#B9BBC2] hover:text-[#C6FF4D] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5F4EF] tracking-tight">
          Privacy Notice & Data Policy
        </h1>
        <p className="text-sm text-[#B9BBC2]">
          Effective as of {currentYear} · {STUDIO_CONFIG.name}
        </p>
      </div>

      <div className="space-y-8 text-sm text-[#B9BBC2] leading-relaxed border-t border-[#34353A] pt-8">
        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-[#F5F4EF]">
            1. Information We Collect
          </h2>
          <p>
            When you submit a project inquiry or contact us through this website, we collect only the personal information you voluntarily provide: your name, email address, company name, website URL, and details about your project scope and budget.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-[#F5F4EF]">
            2. Purpose of Processing
          </h2>
          <p>
            We use your submitted data exclusively to evaluate your project scope, prepare an architectural and cost proposal, and communicate with you directly regarding your inquiry.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-[#F5F4EF]">
            3. Zero Data Sharing or Commercial Resale
          </h2>
          <p>
            We do not sell, rent, trade, or monetize your contact information or project specifications to third-party advertisers, data brokers, or marketing networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-[#F5F4EF]">
            4. Analytics & Outreach Attribution
          </h2>
          <p>
            This website may parse standard, non-invasive campaign parameters (such as UTM source tags) solely to assess which direct outreach communications bring qualified visitors to our portfolio. We do not use fingerprinting or invasive tracking cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-[#F5F4EF]">
            5. Contacting the Studio
          </h2>
          <p>
            If you have questions about our data practices or wish to request the deletion of your inquiry details, please contact us directly at{' '}
            <a
              href={`mailto:${STUDIO_CONFIG.contact.email}`}
              className="text-[#C6FF4D] hover:underline"
            >
              {STUDIO_CONFIG.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
