import Section from "../ui/Section";
import Main from "../ui/Main";
import { inclusive } from "@/data/productData";
import ProductCard from "../helper/productCard";

const Product = () => {
  return (
    <Section>
      <Main className="flex flex-col justify-center items-center gap-8 py-10">
        {inclusive.map((item) => (
          <ProductCard
            key={item.index}
            title={item.title}
            description={item.description}
            textColor={item.textColor}
            img={item.imgUrl}
          />
        ))}
      </Main>
    </Section>
  );
};

export default Product;
