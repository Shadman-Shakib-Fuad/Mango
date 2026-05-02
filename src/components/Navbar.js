"use client";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="/login" className="btn btn-sm btn-primary">
          Login
        </Link>
      </div>

    </div>
  );
}