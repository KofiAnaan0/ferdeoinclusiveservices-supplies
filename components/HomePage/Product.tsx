import Section from "../ui/Section";
import Main from "../ui/Main";
import { inclusive } from "@/data/productData";
import ProductCard from "../helper/productCard";
import H2 from "../ui/H2";

const Product = () => {
  return (
    <Section className="bg-white">
      <Main className="flex flex-col justify-center items-center gap-8">
        <div data-aos="fade-up">
          <H2>Our Ventures</H2>
        </div>

        {inclusive.map((item) => (
          <ProductCard
            key={item.index}
            title={item.title}
            info={item.info}
            description={item.description}
            textColor={item.textColor}
            img={item.imgUrl}
            url={item.url}
          />
        ))}
      </Main>
    </Section>
  );
};

export default Product;
