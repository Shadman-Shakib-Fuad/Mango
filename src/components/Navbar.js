"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const path = usePathname();
  const { user, logout } = useAuth();

  const active = (route) =>
    path === route ? "border-b-2 border-white pb-1" : "";

  return (
    <div className="navbar bg-black text-white px-6 sticky top-0 z-50">

      {/* LEFT */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">📚 Mango Library</Link>
      </div>

      {/* RIGHT */}
      <div className="flex gap-6 items-center">

        <Link href="/" className={active("/")}>Home</Link>
        <Link href="/books" className={active("/books")}>All Books</Link>
        <Link href="/borrow" className={active("/borrow")}>Borrow</Link>
        <Link href="/profile" className={active("/profile")}>Profile</Link>

        {!user ? (
          <Link href="/login">
            <button className="btn btn-primary btn-sm hover:scale-105 transition">
              Login
            </button>
          </Link>
        ) : (
          <>
            <span className="font-semibold">{user.name}</span>
            <button
              onClick={logout}
              className="btn btn-error btn-sm hover:scale-105 transition"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
}