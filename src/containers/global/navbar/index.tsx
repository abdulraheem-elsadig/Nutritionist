"use client";

import { Button } from "@/components/ui/button";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-900 flex flex-col sticky top-0 z-10 w-full">
      <div className="flex justify-between px-4 py-4">
        <div className="w-36 sticky top-0">
          <Image
            src="/images/logo-full.png"
            alt="logo"
            fill
            className="object-contain "
          />
        </div>
        {/* desktop link */}
        <div className="text-white py-4">
          <ul className="flex items-center gap-5 hidden">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="px-3 py-4 bg-lime-300 rounded-sm block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <Button
          size="icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="bg-transparent hover:bg-transparent"
        >
          <Bars3BottomRightIcon className="text-lime-200 size-9" />
        </Button>

        {/* mobile drawer */}
        {isMenuOpen && (
          <nav className="md:hidden bg-emerald-800 p-4 fixed top-[72px] left-0 right-0 z-20">
            <ul className="flex flex-col gap-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-lime-300 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block px-3 py-2 bg-lime-300 text-emerald-900 rounded hover:bg-lime-400 transition-colors text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];
