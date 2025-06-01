
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GSAPAnimations = () => {
  useEffect(() => {
    // Animate service cards on scroll
    gsap.fromTo('.service-card', 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.service-card',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate pricing cards
    gsap.fromTo('.pricing-card', 
      { 
        opacity: 0, 
        y: 30,
        rotationY: 15
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.pricing-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate section headings
    gsap.fromTo('.section-heading', 
      { 
        opacity: 0, 
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.section-heading',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animation for hero elements
    gsap.to('.hero-float', {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  return null;
};

export default GSAPAnimations;
