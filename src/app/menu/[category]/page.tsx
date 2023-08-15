import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="flex flex-col justify-between group w-full sm:w-1/2 lg:w-1/3 h-[60vh] p-4 border-r-2 border-b-2 border-red-500 odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt="Pizza's image"
                className="object-contain"
                fill
              />
            </div>
          )}

          {/* Text Container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="uppercase text-2xl p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase text-white p-2 rounded-md bg-green-600">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
