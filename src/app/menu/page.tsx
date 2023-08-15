import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-fit md:h-[calc(100vh-9rem)] p-4 lg:px-20 xl:px-40">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-fit md:h-[45%] lg:h-[60%] p-8 bg-cover hover:scale-[1.02] transition-all duration-300"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase text-3xl font-bold">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden 2xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } px-4 py-2 rounded-md `}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
