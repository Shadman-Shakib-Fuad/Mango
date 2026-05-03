"use client";

import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

export default function Profile() {

  const { user } = useAuth();

  if (!user) {
    return <h1 className="p-10 text-center">Please login first</h1>;
  }

  return (
    <div className="p-10 text-center">

      <img
        src={user.photo}
        className="w-32 h-32 rounded-full mx-auto"
      />

      <h1 className="text-3xl mt-4">{user.name}</h1>
      <p>{user.email}</p>

      {}
      <Link href="/profile/update">
        <button className="btn btn-primary mt-6 hover:scale-105 transition">
          Update Profile
        </button>
      </Link>

    </div>
  );
}