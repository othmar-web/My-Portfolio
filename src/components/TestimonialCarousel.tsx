import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { TestimonialItem } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const { navigate } = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch tracking for mobile swipe support
  const touchStartX = useRef<number | null>(null);

  const total = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const currentItem = testimonials[currentIndex] || testimonials[0];

  return (
    <div className="space-y-8">
      {/* Client Reviews Header & Counter */}
      <div className="flex items-center justify-between p-4 bg-[#101114] border border-[#34353A] rounded-xl text-xs text-[#B9BBC2]">
        <div className="flex items-center gap-2">
          <MessageSquareQuote className="w-4 h-4 text-[#C6FF4D]" />
          <h3 className="font-semibold text-sm text-[#F5F4EF]">
            Client Reviews
          </h3>
        </div>
        <div className="text-xs font-mono text-[#C6FF4D]">
          {currentIndex + 1} of {total}
        </div>
      </div>

      {/* Main Carousel Surface */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative p-8 md:p-14 bg-[#22242A] border border-[#34353A] rounded-2xl min-h-[300px] flex flex-col justify-between"
      >
        <div className="space-y-6">
          {/* Testimonial Quote */}
          <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-[#F5F4EF] leading-relaxed text-balance">
            “{currentItem.reviewText}”
          </blockquote>

          {/* Reviewer Attribution - First Name Only */}
          <div className="pt-4 border-t border-[#34353A]/80">
            <cite className="not-italic font-bold text-[#F5F4EF] block text-base sm:text-lg">
              {currentItem.firstName}
            </cite>
          </div>
        </div>

        {/* Carousel Controls Row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#34353A]/50 mt-8">
          {/* Counter & Indicator */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#B9BBC2]">
            <span className="text-[#F5F4EF] font-bold">
              {currentIndex + 1} of {total}
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-6 bg-[#C6FF4D]'
                      : 'bg-[#34353A] hover:bg-[#B9BBC2]'
                  }`}
                />
              ))}
            </div>
            <span className="ml-3 text-[11px] text-[#B9BBC2]/70 hidden md:inline">
              (Use keyboard arrows ← → or swipe on mobile)
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-[#101114] border border-[#34353A] hover:border-[#C6FF4D] text-[#F5F4EF] hover:text-[#C6FF4D] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-[#101114] border border-[#34353A] hover:border-[#C6FF4D] text-[#F5F4EF] hover:text-[#C6FF4D] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-2">
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer whitespace-nowrap"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
