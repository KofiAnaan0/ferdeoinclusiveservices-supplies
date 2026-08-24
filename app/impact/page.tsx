// components/impact/Impact.tsx
"use client";

import { ImpactCardProps } from "@/components/helper/ImpactCard";
import ImpactSection from "@/components/HomePage/Impact";
import Section from "@/components/ui/Section";

const VOICE_PARAGRAPHS = [
  `We believe the next major leap in AI across Africa will not come from text — it will come from voice. In the coming years, voice AI will become deeply embedded in everyday life, powering how businesses serve customers, how educators teach, how governments communicate, and how creators reach their audiences. From virtual assistants in local languages to AI avatars delivering training and healthcare information, voice will become the most natural interface between people and technology across the continent.`,
  `Yet for this future to exist, Africa needs its own speech infrastructure. Today's voice AI systems are largely built for a handful of global languages, leaving thousands of African languages and accents underrepresented or entirely absent. But language is more than communication — it carries identity, culture, emotion, trust, and belonging. Without it, AI risks sounding foreign in the very places it is meant to serve.`,
  `At Realistic Labs, we are building realistic multilingual speech models for 2,000+ African languages and accents — creating voice AI that sounds natural, expressive, and culturally aware. We are building the voice layer for Africa's AI era, powering creators, businesses, educators, AI agents, and organizations with technology that truly speaks like us, not just to us.`,
];

const DEFAULT_VIDEO_SRC =
  "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr";

const defaultCard: ImpactCardProps = {
  paragraphs: VOICE_PARAGRAPHS,
  videoSrc: DEFAULT_VIDEO_SRC,
};

const IMPACT_SECTIONS: { title: string; cards: ImpactCardProps[] }[] = [
  {
    title: "ICT Training Impact",
    cards: [defaultCard, defaultCard],
  },
  {
    title: "Industrial Training Impact",
    cards: [defaultCard, defaultCard],
  },
];

export default function Impact() {
  return (
    <Section className="pt-36 md:pt-38">
      {IMPACT_SECTIONS.map((section) => (
        <ImpactSection key={section.title} {...section} />
      ))}
    </Section>
  );
}