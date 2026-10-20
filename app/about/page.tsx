import { Button } from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import Main from "@/components/ui/Main";
import Link from "@/components/ui/NextLink";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import { socialLinks } from "@/data/footerData";
import React from "react";

const AboutPage = () => {
  return (
    <Section className="pt-36 md:pt-30 ">
      <Main className="bg-white">
        <div className="flex flex-col gap-6 mx-auto">
          {/* founder */}
          <div className="space-y-2" data-aos="fade-up">
            <H2>Founder, Managing Director and CEO</H2>
            {/* description */}
            <P className="max-w-2xl mx-auto">
              Mr. Alafi Patrick Ceaser is the Founder, Managing Director and
              Chief Executive Officer of FERDEO Inclusive Services and Supplies
              Limited.
            </P>
          </div>

          {/* video explanation */}
          <div className="mx-auto flex items-center justify-center max-w-4xl w-full">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/fnszQDzXFJw?si=GsGjbOWCYD6ujmsY"
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

          {/* Vision */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Vision</H2>
            <div className="max-w-xl mx-auto">
              <P className="pt-2">
                To become a leading inclusive business solutions company in
                Uganda, delivering professional services, innovative products
                and reliable supply solutions that create economic opportunities
                and sustainable development.
              </P>
            </div>
          </div>

          {/* The Mission */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Mission</H2>
            <div className="max-w-xl mx-auto">
              <P className="pt-2">
                To deliver high-quality, inclusive and sustainable professional
                services, manufactured products and agricultural supply
                solutions while creating employment, developing talent,
                strengthening enterprises, promoting innovation and advancing
                inclusive economic development.
              </P>
            </div>
          </div>

          {/* The solution */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Approach </H2>

            <div className="max-w-xl mx-auto pt-2">
              <ul className="list-disc list-inside space-y-2 text-md text-center text-[#1B3A6B]">
                <li>Identify Potential.</li>
                <li>Develop Capability.</li>
                <li>Create Opportunity.</li>
                <li>Expect Excellence.</li>
              </ul>
            </div>
          </div>

          {/* CAT */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Core Values</H2>
            <P>
              Inclusion, Integrity, Professionalism, Excellence, Accountability
              & Innovation
            </P>

            {/* CAT */}
            {/* <div
              className="mt-8 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Button>Invest in Us</Button>
            </div> */}
          </div>
        </div>
      </Main>
    </Section>
  );
};

export default AboutPage;
