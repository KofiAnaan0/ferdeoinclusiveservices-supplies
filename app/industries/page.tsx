import { Button } from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import Main from "@/components/ui/Main";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import Image from "next/image";
import React from "react";

const Industries = () => {
  return (
    <Section className="pt-36 md:pt-30 ">
      <Main className="bg-white">
        <div className="flex flex-col gap-6 mx-auto">
          {/* founder */}
          <div className="space-y-2" data-aos="fade-up">
            <H2 className="max-w-3xl">
              FERDEO INDUSTRIES & ENTERPRISE DEVELOPMENT CENTRE
            </H2>
            {/* description */}
            <div className="space-y-2 max-w-3xl mx-auto">
              <P>
                The Ferdeo Industries & Enterprise Development Centre is the
                manufacturing, vocational skills and enterprise-development
                division of FERDEO Inclusive Services and Supplies Limited.
              </P>
              <P>
                The Centre brings together production, practical skills
                development, vocational training, creative enterprise, assistive
                and adaptive products and entrepreneurship development within
                one inclusive business platform.
              </P>
              <P>
                We believe that practical skills can become powerful pathways to
                employment, self-employment and enterprise development when they
                are combined with quality production, business knowledge,
                professionalism and access to markets.
              </P>
            </div>
          </div>

          {/* video explanation */}
          {/* <div className="mx-auto flex items-center justify-center max-w-4xl w-full">
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
          </div> */}

          {/* hero image */}
          <div
            className="mx-auto flex items-center justify-center max-w-4xl w-full"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Image
              src="/approach/industries.png"
              alt="Inclusive Media, Research and Business Support Centre"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 896px"
              className="h-auto w-full rounded-lg object-cover shadow-lg"
              priority
            />
          </div>

          {/* Vision */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Purpose</H2>
            <div className="max-w-xl mx-auto pt-2 space-y-2">
              <P className="font-bold">FROM SKILLS TO OPPORTUNITY.</P>
              <P>
                A skill becomes more powerful when it can create a livelihood. A
                product becomes more valuable when it creates income for the
                person who produces it.
              </P>
              <P>
                An enterprise becomes more sustainable when it can create value
                for both its owners and customers. The Centre therefore
                connects:
              </P>
              <P className="font-bold">
                Skills + Production + Enterprise + Markets = Opportunity
              </P>
            </div>
          </div>

          {/* The Mission */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>What We Offer</H2>
            <div className="max-w-xl mx-auto pt-2 space-y-2">
              <P>
                We combine craftsmanship, practical knowledge, innovation and
                quality assurance to produce products for institutions,
                organizations, businesses and individual customers.
              </P>
              <P className="font-bold">Our manufacturing activities include:</P>
              <ul className="list-disc list-inside space-y-2 text-md text-center text-[#1B3A6B]">
                <li>Tailoring and garment production</li>
                <li>Footwear production and repair</li>
                <li>Leather products</li>
                <li>Jewellery and creative products</li>
                <li>Assistive and adaptive products</li>
              </ul>
            </div>
          </div>

          {/* The solution */}
          {/* <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Inclusive Approach</H2>

            <div className="max-w-xl mx-auto pt-2">
              <ul className="list-disc list-inside space-y-2 text-md text-center text-[#1B3A6B]">
                <li>Accessibility</li>
                <li>Practical Learning</li>
                <li>Experienced Facilitators</li>
                <li>Individual Support</li>
              </ul>
            </div>
          </div> */}

          {/* CAT */}
          {/* <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Core Values</H2>
            <P>
              Inclusion, Integrity, Professionalism, Excellence, Accountability
              & Innovation
            </P>

            CAT
            <div
              className="mt-8 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Button>Invest in Us</Button>
            </div>
          </div> */}
        </div>
      </Main>
    </Section>
  );
};

export default Industries;
