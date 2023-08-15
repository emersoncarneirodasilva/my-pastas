import Image from "next/image";
import CountDown from "./CountDown";

// OBS: Fix hydration error
// import dynamic from "next/dynamic";
// const NoSSR = dynamic(() => import("./CountDown"), { ssr: false });

const Offer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between h-screen md:h-[70vh] bg-black md:bg-[url('/offerBg.png')]">
      {/* Text Container */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center p-6">
        <h1 className="text-white text-5xl xl:text-6xl font-bold">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate paralle
        </p>

        {/* OBS: Fix hydration error */}
        {/* <NoSSR /> */}

        <CountDown />

        <button className="text-white rounded-md px-6 py-3 bg-red-500 hover:bg-green-600 hover:scale-[1.02] transition-all duration-300">
          Order Now
        </button>
      </div>

      {/* Image Container */}
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Offer Product"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
