"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: ""
  });

  const handleRegister = () => {
    register(form);
    alert("Registered Successfully!");
    router.push("/login");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card p-6 shadow w-96 bg-base-100">
        <h2 className="text-xl font-bold">Register</h2>

        <input
          className="input input-bordered mt-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input input-bordered mt-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input input-bordered mt-2"
          placeholder="Photo URL"
          onChange={(e) => setForm({ ...form, photo: e.target.value })}
        />

        <input
          className="input input-bordered mt-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleRegister} className="btn btn-primary mt-4">
          Register
        </button>
      </div>
    </div>
  );
}