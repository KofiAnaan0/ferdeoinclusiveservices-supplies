// components/impact/ImpactSection.tsx
"use client";

import StoryCard, { StoryCardProps } from "../helper/StoryCard";

export interface StorySectionProps {
  id: string;
  cards: StoryCardProps[];
}

export default function StorySection({ id, cards }: StorySectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <StoryCard key={i} {...card} />
      ))}
    </div>
  );
}
