import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  // Temporary
  const user = false;

  return (
    <div className="flex items-center justify-between uppercase text-red-500 h-12 md:h-24 p-4 lg:px-10 xl:px-20 border-b-2 border-b-red-500">
      {/* Left Links */}
      <div className="hidden md:flex flex-1 gap-4">
        <Link
          href="/"
          className="hover:text-green-600 transition-all duration-300"
        >
          home
        </Link>
        <Link
          href="/menu"
          className="hover:text-green-600 transition-all duration-300"
        >
          menu
        </Link>
        <Link
          href="/contact"
          className="hover:text-green-600 transition-all duration-300"
        >
          contact
        </Link>
      </div>

      {/* Logo */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">
          <span className="text-green-600">m</span>y{" "}
          <span className="text-green-600">p</span>astas
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-4">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 bg-orange-300 px-1 rounded-md cursor-pointer">
          <Image src="/phone.png" alt="Phone Icon" width={20} height={20} />
          <span>(84) 99999-8888</span>
        </div>
        {!user ? (
          <Link
            href="/login"
            className="hover:text-green-600 transition-all duration-300"
          >
            login
          </Link>
        ) : (
          <Link
            href="/orders"
            className="hover:text-green-600 transition-all duration-300"
          >
            orders
          </Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
