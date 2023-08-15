"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );

    return () => clearInterval(interval);
  }, []);

  {
    /* h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] */
  }
  return (
    <div className="flex flex-col lg:flex-row h-screen gap-10 bg-fuchsia-50">
      {/* Text Container */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-red-500 font-bold">
        <h1 className="uppercase text-center text-5xl md:text-6xl xl:text-7xl p-4 md:p-10">
          {data[currentSlider].title}
        </h1>
        <button className="text-white px-8 py-4 bg-red-500 hover:bg-green-600 hover:scale-[1.02] rounded-md transition-all duration-300">
          Other Now
        </button>
      </div>
      {/* Image Container */}
      <div className="relative flex-1 w-full">
        <Image
          src={data[currentSlider].image}
          alt="Images Slider"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
