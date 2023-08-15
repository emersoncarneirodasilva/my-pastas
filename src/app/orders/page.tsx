const OrderPages = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block px-1 py-6">1237861238721</td>
            <td className="px-1 py-6">19.07.2023</td>
            <td className="px-1 py-6">89.90</td>
            <td className="hidden md:block px-1 py-6">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block px-1 py-6">1237861238721</td>
            <td className="px-1 py-6">19.07.2023</td>
            <td className="px-1 py-6">89.90</td>
            <td className="hidden md:block px-1 py-6">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block px-1 py-6">1237861238721</td>
            <td className="px-1 py-6">19.07.2023</td>
            <td className="px-1 py-6">89.90</td>
            <td className="hidden md:block px-1 py-6">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderPages;
