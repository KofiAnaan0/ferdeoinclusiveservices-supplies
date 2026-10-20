"use client";

import Image from "next/image";
import P from "../ui/P";
import { Button } from "../ui/Button";

export interface ImpactCardProps {
  id?: string;
  desc: string;
  img: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  aosDelay?: number;
}

export default function ImpactCard({
  desc,
  img,
  ctaLabel = "Explore More Impacts",
  onCtaClick,
  aosDelay = 150,
}: ImpactCardProps) {
  return (
    <div className="space-y-4 rounded-lg border-4 border-[#D2691E] bg-white p-4 shadow-xl shadow-black/30 md:p-8">
      <P>{desc}</P>

      <div
        className="mx-auto flex w-full max-w-4xl items-center justify-center"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <Image
          src={img}
          alt={desc}
          width={1200}
          height={675}
          className="h-auto w-full rounded-lg shadow-lg"
        />
      </div>

      {onCtaClick && (
        <div className="flex items-center justify-center">
          <Button onClick={onCtaClick}>{ctaLabel}</Button>
        </div>
      )}
    </div>
  );
}
