"use client";

import React, { useEffect, useRef, useState } from "react";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroImage from "@/public/hero.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6, // 60% visible before autoplay
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <Section className="pt-36 md:pt-30 bg-white">
      {/* main content */}
      <Main>
        <div data-aos="fade-up" data-aos-delay="150">
          {/* Title */}
          <H1 className="mb-2">
            Inclusive Growth.{" "}
            <span className="text-[#B85A19]">Sustainable Development.</span>
          </H1>

          {/* description */}
          <P className="max-w-2xl mx-auto">
            FERDEO Inclusive Services and Supplies Limited is a Ugandan private
            limited company established as a disability-led enterprise committed
            to demonstrating that disability inclusion, commercial enterprise
            and professional excellence can reinforce one another.
          </P>
        </div>

        {/* hero image */}
        {/* <div
          ref={videoRef}
          className="mx-auto flex items-center justify-center max-w-4xl w-full"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Image
            src={HeroImage}
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div> */}
        {/* video explanation */}
        <div
          ref={videoRef}
          className="mx-auto flex items-center justify-center max-w-4xl w-full"
        >
          <div
            className="relative w-full"
            style={{ paddingBottom: "56.25%" }}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/c-UFyQBy7fA?si=I7TOgGQqq2DEKyiV"
              // {
              // 	isVisible
              // 		? "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr?autoplay=1&mute=1&playsinline=1"
              // 		: "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr?mute=1&playsinline=1"
              // }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="w-full md:w-fit"
          >
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button className="border-[#7a2a0e] w-full md:w-fit flex items-center justify-center gap-3 px-6">
                  Explore Our Ventures
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-full cursor-pointer"
              >
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/media")}
                >
                  Inclusive Technology
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/farm")}
                >
                  Inclusive Farm Supplies
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/industries")}
                >
                  Inclusive Industries
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button
            variant="outline"
            size="default"
            className="w-full md:w-fit"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("openChatWidget"));
            }}
          >
            Contact Us
          </Button>
        </div>
      </Main>
    </Section>
  );
};

export default Hero;
