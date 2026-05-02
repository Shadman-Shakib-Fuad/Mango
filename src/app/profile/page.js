"use client";

import { useSession } from "next-auth/react";
import PrivateRoute from "../../components/PrivateRoute";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <PrivateRoute>
      <div className="p-10">
        <h1 className="text-2xl font-bold">My Profile</h1>

        <p>Name: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
      </div>
    </PrivateRoute>
  );
}