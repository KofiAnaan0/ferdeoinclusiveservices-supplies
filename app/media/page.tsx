import { Button } from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import Main from "@/components/ui/Main";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import Image from "next/image";

const Media = () => {
  return (
    <Section className="pt-36 md:pt-30 ">
      <Main className="bg-white">
        <div className="flex flex-col gap-6 mx-auto">
          {/* founder */}
          <div className="space-y-2" data-aos="fade-up">
            <H2 className="max-w-3xl">
              INCLUSIVE MEDIA, RESEARCH & BUSINESS SUPPORT CENTRE
            </H2>
            {/* description */}
            <div className="space-y-2 max-w-3xl mx-auto">
              <P>
                The Inclusive Media, Research & Business Support Centre is a
                service and skills-development centre committed to making
                technology, skills, information and professional services
                accessible to everyone.
              </P>
              <P>
                We provide digital skills training, document and printing
                services, custom branding, consultancy, proposal writing,
                research and business support, with a strong focus on disability
                inclusion.
              </P>
              <P>
                We create an inclusive learning and working environment where
                persons with disabilities and other community members can
                develop practical skills, access essential services and
                participate meaningfully in social and economic activities.
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
              src="/approach/inclusive.png"
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
              <P>
                Many people face barriers to accessing technology, skills,
                employment opportunities and professional services. Persons with
                disabilities can face additional barriers because of
                inaccessible learning environments, limited access to assistive
                technologies and a lack of understanding of disability
                inclusion.
              </P>
              <P>The Centre works to reduce these barriers.</P>
              <P>
                We bring together inclusive training, professional services,
                research, consultancy and practical support to help individuals
                and organizations build the skills and environments needed for
                meaningful participation.
              </P>
              <P>
                We bring together inclusive training, professional services,
                research, consultancy and practical support to help individuals
                and organizations build the skills and environments needed for
                meaningful participation.
              </P>
            </div>
          </div>

          {/* The Mission */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>What We Offer</H2>
            <div className="max-w-xl mx-auto pt-2 space-y-2">
              <P>
                We provide practical computer and digital skills training for
                people of all abilities. Our learning environment is designed to
                accommodate different abilities and learning needs, including
                persons who are blind, deaf or have other disabilities.
              </P>
              <P>
                Our facilitators bring practical experience and an understanding
                of disability, accessibility and inclusive learning, helping
                learners develop confidence alongside technical skills.
              </P>
              <P className="font-bold">Other Services Include:</P>
              <ul className="list-disc list-inside space-y-2 text-md text-center text-[#1B3A6B]">
                <li>Document & Printing Services</li>
                <li>Custom Branding & Creative Services</li>
                <li>Disability Inclusion Consultancy</li>
                <li>Proposal Writing & Project Support</li>
                <li>Research & Business Support</li>
              </ul>
            </div>
          </div>

          {/* The solution */}
          <div data-aos="fade-up" data-aos-delay="150">
            <H2>Our Inclusive Approach</H2>

            <div className="max-w-xl mx-auto pt-2">
              <ul className="list-disc list-inside space-y-2 text-md text-center text-[#1B3A6B]">
                <li>Accessibility</li>
                <li>Practical Learning</li>
                <li>Experienced Facilitators</li>
                <li>Individual Support</li>
              </ul>
            </div>
          </div>

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

export default Media;
