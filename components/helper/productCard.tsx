"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "../ui/Button";
import H3 from "../ui/H3";
import P from "../ui/P";

type ProductProps = {
  title: string;
  info: string;
  description: string[];
  textColor: string;
  img: string;
  url: string;
};

const ProductCard = ({
  title,
  description,
  textColor,
  img,
  info,
  url,
}: ProductProps) => {
  const router = useRouter();

  return (
    <div className="grid w-full items-center gap-8 p-2 md:grid-cols-2">
      {/* Hero image */}
      <div
        className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Product information */}
      <div className="space-y-2" data-aos="fade-up" data-aos-delay="150">
        <H3 className="w-full font-bold">{title}</H3>

        <div className="space-y-2">
          <P className="text-start">{info}</P>

          <ul className="w-full list-inside list-disc space-y-2 text-start text-sm">
            {description.map((item, index) => (
              <li key={index} style={{ color: textColor }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Call to action */}
        <div className="flex items-center justify-center md:justify-start">
          <Button
            variant="default"
            size="default"
            className="w-fit"
            onClick={() => router.push(url)}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
