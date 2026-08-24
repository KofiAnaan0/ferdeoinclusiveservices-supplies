"use client";

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import H2 from "../ui/H2";

type ProductProps = {
  title: string;
  description: string[];
  textColor: string;
  img: string;
};

const ProductCard = ({ title, description, textColor, img }: ProductProps) => {
  return (
    <div className="flex flex-col justify-center md:justify-start items-center md:items-start p-4 gap-4 w-full">
      {/* title */}
      <H2 className="w-full">{title}</H2>

      {/* hero image */}
      <div
        className="relative mx-auto max-w-4xl w-full aspect-video rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 72vw"
          className="object-cover"
          priority
        />
      </div>

      {/* description */}
      <ul className="list-disc list-inside space-y-2 text-sm text-start w-full">
        {description.map((item, index) => (
          <li key={index} style={{ color: textColor }}>
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex justify-start md:justify-center items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full">
        <Button
          variant="outline"
          size="default"
          className="w-fit"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("openChatWidget"));
          }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
