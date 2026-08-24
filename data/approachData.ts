import { ApproachType } from "@/types/approachType";
import inclusive from "@/public/approach/inclusive.png";
import supplies from "@/public/approach/supplies.png";
import industries from "@/public/approach/industries.png";

export const approachData: ApproachType[] = [
  {
    id: 1,
    index: "inclusive",
    title: "Inclusive Media, Research & Business Support Centre",
    description:
      "Providing professional documentation, research, printing, branding, ICT, accessibility and institutional business support services.",
    imageUrl: inclusive,
    // videoUrl: "https://youtu.be/i2_7CtWF0x4?si=F04cBIqFyPwJAdez",
  },
  {
    id: 2,
    index: "supplies",
    title: "Gracious Farm Supplies",
    description:
      "Supplying quality agricultural products to institutions, wholesalers, retailers and households.",
    imageUrl: supplies,
    // videoUrl: "https://youtu.be/FKYMZzve1p8?si=NjbXMVHbqlgur1K9",
  },
  {
    id: 3,
    index: "industries",
    title: "Inclusive Industries",
    description:
      "Empowering people through practical skills, inclusive production and vocational training in tailoring, uniform production, footwear, jewellery, assistive devices and VSLA products.",
    imageUrl: industries,
    // videoUrl: "https://youtu.be/rJtF32LTX8U?si=AtBi7a_5L_wMOkyI",
  },
];
