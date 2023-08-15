import Image from "next/image";

const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row text-red-500 h-full lg:h-[calc(100vh-9rem)]">
      {/* Products Container */}
      <div className="flex flex-col justify-center h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 p-4 lg:px-10 xl:px-20 overflow-auto">
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      {/* Payment Container */}
      <div className="flex flex-col justify-center gap-4 2xl:gap-6 2xl:text-xl h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2 p-4 lg:px-10 xl:px-20 bg-fuchsia-50">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>

        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-600">FREE</span>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between">
          <span className="uppercase">total(inc. vat)</span>
          <span className="font-bold">$81.70</span>
        </div>

        <button className="self-end w-1/2 p-3 text-white rounded-md bg-red-500 hover:bg-green-600 hover:scale-[1.01] transition-all duration-300">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
