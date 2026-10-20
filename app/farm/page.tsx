import { Button } from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import Main from "@/components/ui/Main";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import Image from "next/image";
import React from "react";

const Farm = () => {
  return (
    <Section className="pt-36 md:pt-30 ">
      <Main className="bg-white">
        <div className="flex flex-col gap-6 mx-auto">
          {/* founder */}
          <div className="space-y-2" data-aos="fade-up">
            <H2 className="max-w-3xl">FERDEO FARM SUPPLIES</H2>
            {/* description */}
            <div className="space-y-2 max-w-3xl mx-auto">
              <P>
                Ferdeo Farm Supplies is the agricultural supply and value-chain
                division of FERDEO Inclusive Services and Supplies Limited.
              </P>
              <P>
                The division connects farmers and agricultural producers with
                reliable markets while supplying quality agricultural products
                to government institutions, development partners, NGOs, schools,
                health facilities, hotels, restaurants, wholesalers, retailers,
                businesses and households.
              </P>
              <P>
                We believe agriculture is not simply about moving products from
                farms to buyers. It is about creating livelihoods, strengthening
                markets, supporting food systems and building economic
                opportunity.
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
              src="/approach/supplies.png"
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
              <P className="font-bold">
                CONNECTING PRODUCERS. SERVING MARKETS. CREATING OPPORTUNITY.
              </P>
              <P>
                Agriculture supports millions of livelihoods across Uganda. Yet
                farmers and producers can face challenges related to market
                access, aggregation, pricing, quality, transportation and
                reliable buyers.
              </P>
              <P>
                At the same time, institutions and businesses require
                agricultural products that are available in the right
                quantities, appropriate quality and at the right time.
              </P>
              <P className="font-bold">
                Ferdeo Farm Supplies seeks to bridge this gap.
              </P>
              <P>
                We work to connect: Farmers → Produce → Markets → Buyers →
                Opportunity
              </P>
            </div>
          </div>

          {/* The Mission */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>What We Offer</H2>
            <div className="max-w-xl mx-auto pt-2 space-y-2">
              <P>
                Ferdeo Farm Supplies was established to develop a practical
                agricultural supply business capable of serving both
                institutional and commercial markets while contributing to
                inclusive economic development.
              </P>
              <P>
                We work with farmers, producer groups, cooperatives, suppliers
                and buyers to create more reliable agricultural value chains.
              </P>
              <P className="font-bold">Our model combines:</P>
              <ul className="list-disc list-inside space-y-2 text-md text-center text-[#1B3A6B]">
                <li>Agricultural sourcing</li>
                <li>Produce aggregation</li>
                <li>Quality assurance</li>
                <li>Institutional supply</li>
                <li>Wholesale distribution</li>
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

export default Farm;
