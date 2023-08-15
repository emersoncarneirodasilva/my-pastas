import { singleProduct } from "@/data";
import Price from "@/components/Price";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around md:items-center md:gap-8 text-red-500 h-screen p-4 lg:px-20 xl:px-40">
      {/* Image Container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            className="object-contain"
            fill
          />
        </div>
      )}

      {/* Text Container */}
      <div className="flex flex-col md:justify-center gap-4 md:gap-6 xl:gap-8 h-1/2 md:h-[70%]">
        <h1 className="uppercase text-3xl xl:text-5xl font-bold">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
