"use client"

import { Button } from "../ui/button"
import { useEffect } from "react";
import { gsap } from "gsap";
import HeroAnimatedText from "./HeroAnimatedText";
import { useAuth } from "@/context/AuthContext";

export default function HeroSection() {
  const { openSignUp } = useAuth();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("h2", {
      delay: 1,
      autoAlpha: 0,
      y: 60,
      filter: "blur(10px)",
      duration: 0.8,
      ease: "power2.out",
    }).from(
      "#animate",
      {
        autoAlpha: 0,
        y: 60,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5",
    );
  }, []);

  return (
    <section className="my-8 w-full h-min-screen">
      <div className="flex flex-col max-w-7xl mx-auto space-y-6 px-6 items-center">
        <HeroAnimatedText />
        <h2
          className="text-center text-2xl font-semibold text-primary/70 tracking-tight sm:text-3xl"
        >
          Texto de prueba que hace que el texto se vea bien de momento<br /> este texto es más de lo mismo.
        </h2>
        <div id="animate" className="flex items-center gap-4">
          <Button variant="default" onClick={openSignUp}>
            Empieza ahora
          </Button>
          <Button variant="secondary"> Descubre más </Button>
        </div>
      </div>
    </section>
  )
}
