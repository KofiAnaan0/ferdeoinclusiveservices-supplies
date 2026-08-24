import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { brandLogo } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import H2 from "./ui/H2";
import H3 from "./ui/H3";

export default function LogoCloud() {
  return (
    <section className="overflow-hidden">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center">
          {/* title */}
          <H3 className="font-bold">Companies/NGOs Working with Us</H3>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {brandLogo.map((logo) => (
                <Link href={logo.url} key={logo.id}>
                  <div className="flex items-center justify-center h-12">
                    <Image
                      src={logo.href}
                      alt={`logo + ${logo.id}`}
                      className="mx-auto object-contain"
                      height={logo.height}
                    />
                  </div>
                </Link>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r from-gray-250 absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-gray-250 absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
