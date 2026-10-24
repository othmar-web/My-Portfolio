import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  // First item open by default for immediate visual context
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#34353A] border-y border-[#34353A]">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const itemNumber = (index + 1).toString().padStart(2, '0');

        return (
          <div key={item.id} className="py-5 transition-colors">
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full flex items-start justify-between text-left gap-4 py-2 text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <span className="font-mono text-xs text-[#B9BBC2] mt-1 shrink-0">
                  {itemNumber}.
                </span>
                <span className="font-display text-base md:text-lg font-medium leading-snug group-hover:text-[#C6FF4D] transition-colors">
                  {item.question}
                </span>
              </div>
              <div
                className={`w-7 h-7 rounded-full bg-[#22242A] border border-[#34353A] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#C6FF4D] text-[#101114] border-[#C6FF4D]' : 'text-[#B9BBC2]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="pt-3 pb-2 pl-8 md:pl-12 pr-4 text-sm md:text-base text-[#B9BBC2] leading-relaxed transition-opacity duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
