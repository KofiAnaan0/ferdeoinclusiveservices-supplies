"use client";

import { useRef } from "react";
import P from "../ui/P";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

export interface StoryCardProps {
  paragraphs: string[];
  videoSrc: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  aosDelay?: number;
}

export default function StoryCard({
  paragraphs,
  videoSrc,
  ctaLabel = "Explore More Impacts",
  onCtaClick,
  aosDelay = 150,
}: StoryCardProps) {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  return (
    <div
      className="bg-white border-2 border-[#D2691E] shadow-xl shadow-black/30 rounded-lg p-1 md:p-3 space-y-2"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* video explanation */}
      <div
        ref={videoRef}
        className="mx-auto flex items-center justify-center w-full"
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
      {/* description */}
      <div className="space-y-4 flex flex-col items-center justify-center">
        {paragraphs.map((text, i) => (
          <P key={i} className="max-w-3xl mx-auto">
            {text}
          </P>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center">
        <Button onClick={() => router.push("/impact")}>{ctaLabel}</Button>
      </div>
    </div>
  );
}
