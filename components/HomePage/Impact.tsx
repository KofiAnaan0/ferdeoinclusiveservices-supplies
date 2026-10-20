"use client";

import Main from "../ui/Main";
import H2 from "../ui/H2";
import ImpactCard from "../helper/ImpactCard";
import type { ImpactCardProps } from "../helper/ImpactCard";

export interface ImpactSectionProps {
  title: string;
  cards: ImpactCardProps[];
}

export default function ImpactSection({ title, cards }: ImpactSectionProps) {
  return (
    <Main data-aos="fade-up">
      <H2 className="mb-4">{title}</H2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {cards.map((card, index) => (
          <ImpactCard key={card.id ?? index} {...card} />
        ))}
      </div>
    </Main>
  );
}
