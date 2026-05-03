"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const navItem = (path, label) => (
    <Link
      href={path}
      className={`px-4 py-2 rounded-full transition ${
        pathname === path
          ? "bg-primary text-white"
          : "hover:bg-base-200"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="navbar bg-base-100 shadow px-6">

      {/* LEFT LOGO */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          📚 Mango Library
        </Link>
      </div>

      {/* RIGHT MENU */}
      <div className="flex gap-3 justify-end">
        {navItem("/", "Home")}
        {navItem("/books", "All Books")}
        {navItem("/borrow", "Borrow")}
        {navItem("/profile", "Profile")}
      </div>

    </div>
  );
}