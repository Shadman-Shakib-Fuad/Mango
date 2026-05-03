"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLink = (path, label) => (
    <Link
      href={path}
      className={`px-3 py-1 rounded transition ${
        pathname === path
          ? "border-b-2 border-primary text-primary"
          : "hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="navbar bg-base-100 shadow px-6">

      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          🍋 Mango Library
        </Link>
      </div>

      <div className="flex gap-6">
        {navLink("/", "Home")}
        {navLink("/books", "All Books")}
        {navLink("/profile", "My Profile")}
      </div>

      <div>
        {session ? (
          <button onClick={() => signOut()} className="btn btn-sm btn-error">
            Logout
          </button>
        ) : (
          <button onClick={() => signIn()} className="btn btn-primary btn-sm">
            Login
          </button>
        )}
      </div>

    </div>
  );
}