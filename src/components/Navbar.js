"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100 shadow px-6">

      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          Mango Library
        </Link>
      </div>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/books">All Books</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      <div>
        {session ? (
          <div className="flex gap-2 items-center">
            <span>{session.user.name}</span>
            <button onClick={() => signOut()} className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => signIn("google")} className="btn btn-primary btn-sm">
            Login
          </button>
        )}
      </div>

    </div>
  );
}