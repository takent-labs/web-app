"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default function HeroAnimatedText() {
  const textRefe = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!textRefe.current) return;

    gsap.registerPlugin(SplitText);

    const split = new SplitText(textRefe.current, { type: "words" });

    gsap.from(split.words, {
      duration: 0.8,
      y: 10,
      stagger: 0.12,
      ease: "power4.out",
      autoAlpha: 0,
      filter: "blur(10px)"
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      ref={textRefe}
      className="text-center text-6xl font-bold tracking-tight sm:text-8xl pb-6"
    >
      Esto es un título animado{" "}utilizado para pruebas.
    </h1>
  );
}