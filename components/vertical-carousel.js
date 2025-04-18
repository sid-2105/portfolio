"use client";

import { PurpleText } from './texts';
import { FaLinkedin } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import DotsSVG from './assets/DotsSVG';
import DesignSVG from './assets/DesignSVG';

const VerticalCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef(null);

  // Auto-rotate slides when not hovering
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 10000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <div
      className="relative h-[400px] w-full overflow-hidden rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel container */}
      <div className="absolute w-full h-[600px] top-1/2 -translate-y-1/2 z-10">
        {testimonials.map((testimonial, index) => {
          // Calculate position based on index relative to current
          let position = index - currentIndex;

          // Handle wrap-around for continuous loop effect
          if (position < -1) position += testimonials.length;
          if (position > 1) position -= testimonials.length;

          let slideClasses = "absolute w-full h-1/3 transition-all duration-700 ease-in-out";

          // Position classes based on relation to current slide
          if (position === -1) {
            // Previous slide (above)
            slideClasses += " -top-[10%] opacity-40 scale-70 z-10";
          } else if (position === 0) {
            // Current slide (center)
            slideClasses += " top-[30%] opacity-100 scale-100 z-50";
          } else if (position === 1) {
            // Next slide (below)
            slideClasses += " top-[70%] opacity-40 scale-70 z-10";
          } else {
            // Hidden slides (offscreen)
            slideClasses += " opacity-0 scale-75 -z-10";
            if (position < 0) {
              slideClasses += " -top-1/3";
            } else {
              slideClasses += " top-full";
            }
          }

          return (
            <div key={index} className={slideClasses}>
              <div className="relative  h-fit w-[90%] max-w-xl mx-auto flex flex-col gap-1">
                {/* <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-purple">
                    <Image
                      src={testimonial.profile_picture}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {testimonial.link && (
                    <Link
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-purple hover:text-tertiary transition-colors duration-300"
                      aria-label={`${testimonial.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin size={24} />
                    </Link>
                  )}
                </div> */}
                <blockquote className="italic text-xs text-primary flex gap-1 rounded p-6 shadow-lg bg-secondary/80 backdrop-blur-sm">
                  <PurpleText className="mb-auto text-4xl font-bold">&ldquo;</PurpleText>
                  <span>{testimonial.quote}</span>
                  <PurpleText className="mt-auto text-4xl font-bold">&rdquo;</PurpleText>
                </blockquote>

                <div>
                  <h3 className="font-bold text-sm text-tertiary">
                    <Link
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${testimonial.name}'s LinkedIn profile`}
                    >
                      {testimonial.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-primary/70">{testimonial.location}</p>
                </div>

                <div className="absolute right-0 bottom-2 bg-secondary/80 shadow shadow-purple-500/50 h-16 w-16 rounded-full overflow-hidden border-2 border-purple">
                  <Link
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${testimonial.name}'s LinkedIn profile`}
                  >
                    <Image
                      src={testimonial.profile_picture}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-30">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 disabled:cursor-not-allowed ${index === currentIndex ? 'bg-purple scale-150' : 'bg-primary/30 hover:bg-primary/50'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Top SVG */}
      <div className="absolute top-2 left-[0%] flex flex-col z-0">
        <DesignSVG className="w-24 h-24" />
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-2 right-[10%] flex flex-col z-0">
        <DotsSVG className="w-16 h-16" />
      </div>
    </div>
  );
};

export default VerticalCarousel;
