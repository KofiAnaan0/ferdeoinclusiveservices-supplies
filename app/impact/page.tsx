"use client";

import ImpactSection from "@/components/HomePage/Impact";
import Section from "@/components/ui/Section";

const IMPACT_SECTIONS = [
  {
    id: "voice-impact",
    title: "Our Impact Stories",
    cards: [
      {
        id: "1",
        desc: "What happens when opportunity meets determination? Meet Ababiku Jackline, a woman with a physical disability who turned her advanced computer training at FARDEO into a life-changing opportunity. Today, she runs her own computer centre in Pakele Town Council, earns her own income, and is building a future on her own terms. Her story is proof that with the right skills and opportunity, independence is possible.",
        img: "/jackie.jfif",
      },
      {
        id: "2",
        desc: "In 2013, Adebasiku Faustine lost his sight, making everyday tasks like reading, writing, and using digital devices a challenge. But his story did not end there. After completing FARDEO’s basic computer training in February 2026, he can now use a computer to write reports in his role as Chairperson of the Adjumani Association of the Blind. What once seemed out of reach has become possible again—not because his circumstances changed, but because he gained new skills to navigate them.",
        img: "/faustine.jfif",
      },
      {
        id: "3",
        desc: "A physical disability has not stopped Mr. Idibu from pursuing his independence. Through determination and practical skills, he mastered riding a tricycle and now works with FARDEO Inclusive Supplies Limited, transporting produce to market. Today, his skills provide him with a source of income and a greater sense of independence. His journey shows what becomes possible when people are given the opportunity to learn, work, and build a livelihood with dignity.",
        img: "/idibu.jfif",
      },
    ],
  },
];

export default function Impact() {
  return (
    <Section className="pt-36 md:pt-30">
      {IMPACT_SECTIONS.map((section) => (
        <ImpactSection key={section.id} {...section} />
      ))}
    </Section>
  );
}
