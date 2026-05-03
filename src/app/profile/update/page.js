"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function UpdateProfile() {

  const { user } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: user?.name || "",
    photo: user?.photo || ""
  });

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name: form.name,
      photo: form.photo
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map(u =>
      u.email === user.email ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    router.push("/profile");
  };

  if (!user) {
    return <h1 className="p-10 text-center">Login first</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleUpdate}
        className="bg-white/10 p-8 rounded-xl w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Update Profile</h2>

        <input
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="input input-bordered w-full"
          placeholder="Name"
        />

        <input
          value={form.photo}
          onChange={e => setForm({...form, photo: e.target.value})}
          className="input input-bordered w-full"
          placeholder="Photo URL"
        />

        <button className="btn btn-primary w-full">
          Update Information
        </button>

      </form>

    </div>
  );
}