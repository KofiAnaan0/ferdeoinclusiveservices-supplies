import React from "react";
import { approachData } from "@/data/approachData";
import ApproachCard from "../helper/ApproachCard";
import P from "../ui/P";
import H2 from "../ui/H2";
import Main from "../ui/Main";

const Approach = () => {
  return (
    <section className="relative py-20">
      <Main>
        {/* Title */}
        <div className="text-center">
          <H2>Our Ventures</H2>

          <P className="mt-4 text-[#4A5568] max-w-2xl mx-auto">
            Our integrated business model enables us to provide a wide range of
            professional products and services while maintaining specialized
            expertise in every sector.
          </P>
        </div>

        {/* Sticky Cards */}
        <div className="pb-40">
          {approachData.map((item, index) => (
            <div
              key={item.id}
              className="sticky"
              style={{ top: `${90 + index * 20}px` }}
            >
              <ApproachCard reversed={index % 2 !== 0} {...item} />
            </div>
          ))}
        </div>
      </Main>
    </section>
  );
};

export default Approach;
