"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: "1", title: "home", url: "/" },
  { id: "2", title: "menu", url: "/menu" },
  { id: "3", title: "working hours", url: "/" },
  { id: "4", title: "contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Temporary
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Open Menu Icon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Close Menu Icon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="absolute flex flex-col items-center justify-center gap-8 text-3xl text-white left-0 top-24 w-full h-[calc(100vh-6rem)] bg-red-500 z-10">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="hover:text-green-600 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          {!user ? (
            <Link
              href="/login"
              className="hover:text-green-600 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              login
            </Link>
          ) : (
            <Link
              href="/orders"
              className="hover:text-green-600 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              orders
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
