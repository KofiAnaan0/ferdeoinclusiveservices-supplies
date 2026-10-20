// components/impact/Impact.tsx
"use client";

import Section from "@/components/ui/Section";
import { StoryCardProps } from "../helper/StoryCard";
import StorySection from "./StorySection";
import Main from "../ui/Main";
import P from "../ui/P";
import H2 from "../ui/H2";

const VOICE_PARAGRAPHS: string[] = [];

const DEFAULT_VIDEO_SRC: { id: string; video_src: string }[] = [
  {
    id: "1",
    video_src: "https://www.youtube.com/embed/LNxU-0FbqE8?si=TvhVaV4ezWUEOt-_",
  },
  {
    id: "2",
    video_src: "https://www.youtube.com/embed/MZkcr_vcl1Y?si=_y1OSrf0NBPU9rAy",
  },
  {
    id: "3",
    video_src: "https://www.youtube.com/embed/9R1Y8sIrgK0?si=Kd1waocqabO4yTdr",
  },
];

const IMPACT_SECTIONS: {
  id: string;
  cards: StoryCardProps[];
}[] = [
  {
    id: "1",
    cards: DEFAULT_VIDEO_SRC.map((video) => ({
      paragraphs: VOICE_PARAGRAPHS,
      videoSrc: video.video_src,
    })),
  },
];

export default function Story() {
  return (
    <Section className="mb-4">
      <Main>
        <div data-aos="fade-up">
          <P className="text-center">
            Every skill has a story. Every journey holds a lesson.
          </P>

          <H2 className="pt-2">We Learned. We Created. We Teach.</H2>

          <P className="max-w-2xl mx-auto">
            From self-taught skills to teaching others, listen to stories of how
            persons with disabilities are empowering the next generation.
          </P>
        </div>

        {IMPACT_SECTIONS.map((section) => (
          <StorySection key={section.id} {...section} />
        ))}
      </Main>
    </Section>
  );
}
