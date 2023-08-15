import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-full overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="flex w-fit">
        {/* Single item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-around w-screen md:w-[50vw] xl:w-[33vw] h-[70vh] xl:h-[90vh] p-4 hover:bg-fuchsia-50 transition-all duration-300"
          >
            {/* Image Container */}
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] mb-4 transition-all duration-500">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Text Container */}
            <div className="flex flex-1 flex-col items-center justify-center text-center gap-4">
              <h1 className="uppercase text-xl xl:text-2xl 2xl:text-3xl font-bold">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <span className="text-xl font-bold">${product.price}</span>
              <button className="p-2 rounded-md text-white bg-red-500 hover:bg-green-600 hover:scale-[1.02] transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
