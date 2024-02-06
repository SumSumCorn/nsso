import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactNode, RefObject, useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const TurnUp = ({
  triggerRef,
  children,
  className,
}: {
  triggerRef?: RefObject<HTMLElement>;
  children: ReactNode;
  className?: string;
}) => {
  const el = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!triggerRef) {
      triggerRef = el;
    }
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      // markers: true,
      onEnter: () => {
        animate(el.current!);
      },
    });

    el.current!.style.opacity = '0';
  });

  const animate = (item: HTMLSpanElement) => {
    gsap.fromTo(
      item,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 1.25,
        overwrite: 'auto',
        ease: 'expo',
      }
    );
  };

  return (
    <span ref={el} className={`inline-block ${className}`}>
      {children}
    </span>
  );
};

export default TurnUp;
