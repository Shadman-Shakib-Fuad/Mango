"use client";

import PrivateRoute from "../../components/PrivateRoute";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <div className="p-10">
        <h1 className="text-2xl font-bold">My Profile</h1>

        <div className="mt-4 space-y-2">
          <p><b>Name:</b> {user?.name}</p>
          <p><b>Email:</b> {user?.email}</p>
        </div>
      </div>
    </PrivateRoute>
  );
}