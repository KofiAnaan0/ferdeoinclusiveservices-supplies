import React from "react";
import Section from "../ui/Section";
import Grid from "../ui/Grid";
import H3 from "../ui/H3";
import P from "../ui/P";
import Link from "../ui/NextLink";
import Main from "../ui/Main";
import { companyData, productData, socialLinks } from "@/data/footerData";

const Footer = () => {
  return (
    <Section className="bg-[#1B3A6B] mb-0 py-4 mt-0">
      <Main data-aos="fade-up">
        <Grid className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
          {/* about */}
          <div className="space-y-4">
            {/* title */}
            <H3 className="text-gray-100 text-start">
              Inclusive Services & Supplies Ltd
            </H3>

            {/* description */}
            <P className="text-gray-200 text-start text-xs md:text-xs">
              Empowering sustainable growth through inclusive services,
              innovative solutions, and reliable supplies for everyone.
            </P>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <H3 className="text-gray-100 text-start">Company</H3>

            <div className="flex flex-col space-y-2">
              {companyData.map((company) => (
                <Link
                  href={company.links}
                  key={company.id}
                  className="text-gray-200 text-xs hover:text-gray-300 transition-colors no-underline"
                >
                  {company.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <H3 className="text-gray-100 text-start">Ventures</H3>

            <div className="flex flex-col space-y-2">
              {productData.map((product) => (
                <Link
                  href={product.links}
                  key={product.id}
                  className="text-gray-200 text-xs hover:text-gray-300 transition-colors no-underline"
                >
                  {product.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <H3 className="text-gray-100 text-start">Socials</H3>

            {/* social links */}
            <div className="flex items-center justify-start space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;

                return (
                  <Link
                    href={link.href}
                    key={link.id}
                    className=" text-gray-200 hover:text-gray-300 transition-colors no-underline mb-2"
                  >
                    <IconComponent />
                  </Link>
                );
              })}
            </div>
          </div>
        </Grid>

        {/* divider */}
        <div className="w-full border-t border-white"></div>

        {/* Copyright */}
        <div className="flex items-center justify-center">
          <P className="text-xs md:text-xs text-white">
            Copyright ©{new Date().getFullYear()} Inclusive Services & Supplies
            Ltd. All Rights Reserved.
          </P>
        </div>
      </Main>
    </Section>
  );
};

export default Footer;
