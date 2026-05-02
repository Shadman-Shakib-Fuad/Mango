"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

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
        {user ? (
          <div className="flex gap-2 items-center">
            <span className="font-semibold">{user.name}</span>
            <button onClick={logout} className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>

    </div>
  );
}