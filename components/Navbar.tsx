import Link from "next/link";
import logo from "@/assets/asset 0.png";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <header className="container mx-auto px-10 py-6  bg-black bg-opacity-50">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="logo" width={200} height={2000} />
        </div>
        <ul className="hidden md:flex space-x-6 opacity-100">
          <NavItem href="/" label="Home" />
          <NavItem href="/services" label="Services" />
          {/* <NavItem href="/industries" label="Industries" /> */}
          <NavItem
            href="/digital-content-services"
            label="Digital Content Services"
          />
          <NavItem href="/software-support" label="Software Support" />
          <NavItem href="/training-courses" label="Training & Courses" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/contact-us" label="Contact Us" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

  
  function NavItem({ href, label }: { href: string; label: string }) {
    return (
      <li>
        <Link
          href={href}
          className="hover:text-teal-500 transition-colors duration-300"
        >
          {label}
        </Link>
      </li>
    );
  }