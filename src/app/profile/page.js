"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) return <h1 className="p-10">Please login</h1>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">My Profile</h1>

      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <img src={session.user.image} className="w-20 rounded mt-4" />
    </div>
  );
}