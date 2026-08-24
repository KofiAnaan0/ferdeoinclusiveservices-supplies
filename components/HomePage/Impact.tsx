// components/impact/ImpactSection.tsx
"use client";

import Main from "../ui/Main";
import H2 from "../ui/H2";
import ImpactCard, { ImpactCardProps } from "../helper/ImpactCard";

export interface ImpactSectionProps {
  title: string;
  cards: ImpactCardProps[];
}

export default function ImpactSection({ title, cards }: ImpactSectionProps) {
  return (
    <Main data-aos="fade-up">
      <H2 className="mb-4">{title}</H2>
      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <ImpactCard key={i} {...card} />
        ))}
      </div>
    </Main>
  );
}