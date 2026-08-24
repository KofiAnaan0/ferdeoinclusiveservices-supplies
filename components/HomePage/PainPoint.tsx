"use client";

import React, { useRef, useState } from "react";
import P from "../ui/P";
import { Button } from "../ui/Button";
import Section from "../ui/Section";
import Main from "../ui/Main";
import H1 from "../ui/H1";
import H2 from "../ui/H2";
import { useRouter } from "next/navigation";

const PainPoint = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  return (
    <Section>
      {/* title */}
      <H2 className="mb-4">Our Impacts</H2>
      <Main
        data-aos="fade-up"
        className="bg-white border-5 border-[#D2691E] shadow-xl shadow-black/30 rounded-lg p-8 md:p-16 space-y-8"
      >
        {/* description */}
        <div className="space-y-4 flex flex-col items-center justify-center">
          {/* pain */}
          <P className="max-w-3xl mx-auto">
            Meet Ayiga Faustine, a former headteacher who lost his sight in
            2014. Despite his disability, he has been determined to continue his
            work in education. However, he faced significant challenges in
            accessing information and resources due to the lack of inclusive
            technology and support systems for visually impaired individuals in
            Uganda.
          </P>

          {/* set room */}
          <P className="max-w-3xl mx-auto">
            Yet for this future to exist, Africa needs its own speech
            infrastructure. Today’s voice AI systems are largely built for a
            handful of global languages, leaving thousands of African languages
            and accents underrepresented or entirely absent. But language is
            more than communication — it carries identity, culture, emotion,
            trust, and belonging. Without it, AI risks sounding foreign in the
            very places it is meant to serve.
          </P>

          {/* solution */}
          <P className="max-w-3xl mx-auto">
            At Realistic Labs, we are building realistic multilingual speech
            models for 2,000+ African languages and accents — creating voice AI
            that sounds natural, expressive, and culturally aware. We are
            building the voice layer for Africa’s AI era, powering creators,
            businesses, educators, AI agents, and organizations with technology
            that truly speaks like us, not just to us.
          </P>
          {/* video explanation */}
          <div
            ref={videoRef}
            className="mx-auto flex items-center justify-center max-w-4xl w-full"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr"
                // {
                // 	isVisible
                // 		? "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr?autoplay=1&mute=1&playsinline=1"
                // 		: "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr?mute=1&playsinline=1"
                // }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center">
          <Button onClick={() => router.push("/impact")}>
            Explore More Impacts
          </Button>
        </div>
      </Main>
    </Section>
  );
};

export default PainPoint;
