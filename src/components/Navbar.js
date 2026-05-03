"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">

      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary hover:scale-105 transition">
          🍋 Mango Library
        </Link>
      </div>

      <div className="flex gap-6 font-medium">
        <Link href="/" className="hover:text-primary transition">Home</Link>
        <Link href="/books" className="hover:text-primary transition">All Books</Link>
        <Link href="/profile" className="hover:text-primary transition">My Profile</Link>
      </div>

      <div>
        {session ? (
          <div className="flex gap-3 items-center">
            <span className="font-semibold">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="btn btn-sm btn-error hover:scale-105 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="btn btn-primary btn-sm hover:scale-105 transition"
          >
            Login
          </button>
        )}
      </div>

    </div>
  );
}