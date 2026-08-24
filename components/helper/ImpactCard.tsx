"use client";

import { useRef } from "react";
import P from "../ui/P";
import { Button } from "../ui/Button";

export interface ImpactCardProps {
  paragraphs: string[];
  videoSrc: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  aosDelay?: number;
}

export default function ImpactCard({
  paragraphs,
  videoSrc,
  ctaLabel = "Explore More Impacts",
  onCtaClick,
  aosDelay = 150,
}: ImpactCardProps) {
  const videoRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-white border-5 border-[#D2691E] shadow-xl shadow-black/30 rounded-lg p-4 md:p-8 space-y-4">
      {/* description */}
      <div className="space-y-4 flex flex-col items-center justify-center">
        {paragraphs.map((text, i) => (
          <P key={i} className="max-w-3xl mx-auto">
            {text}
          </P>
        ))}

        {/* video explanation */}
        <div
          ref={videoRef}
          className="mx-auto flex items-center justify-center max-w-4xl w-full"
          data-aos="fade-up"
          data-aos-delay={aosDelay}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src={videoSrc}
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
        <Button onClick={onCtaClick}>{ctaLabel}</Button>
      </div>
    </div>
  );
}