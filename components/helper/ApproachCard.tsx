"use client";

import React from "react";
import Section from "../ui/Section";
import P from "../ui/P";
import { Button } from "../ui/Button";
import { ApproachType } from "@/types/approachType";
import Main from "../ui/Main";
import { useRouter } from "next/navigation";
import H3 from "../ui/H3";
import Image from "next/image";

interface ApproachProps extends ApproachType {
  reversed: boolean;
}

const ApproachCard = ({
  title,
  description,
  imageUrl,
}: ApproachProps) => {
  const router = useRouter();

  return (
    <Section>
      <Main
        className="lg:w-full mx-auto rounded-md overflow-hidden shadow-xl shadow-black/40 relative aspect-video bg-[#7a2a0e]"
        data-aos="fade-up"
      >
        {/* Full-cover image */}
        <Image
          src={imageUrl!}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 72vw"
        />

        {/* Gradient — dark on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        {/* Extra bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Text overlay — left side */}
        <div className="absolute top-2/3 -translate-y-2/3 left-0 p-6 md:p-8 space-y-2 max-w-[55%]">
          <H3 className="text-white text-start font-bold leading-tight">
            {title}
          </H3>
          <P className="text-white/75 text-xs text-start leading-snug line-clamp-3">
            {description}
          </P>

          {/* CTA */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="border-white/60 text-white hover:bg-white/10"
              onClick={() => router.push("/product")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Main>
    </Section>
  );
};

export default ApproachCard;