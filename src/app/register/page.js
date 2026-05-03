"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

export default function Register() {

  const { register } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();
    register(form);
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleRegister} className="bg-white/10 p-8 rounded-xl w-96 space-y-4">

        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input placeholder="Name"
          className="input input-bordered w-full"
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input placeholder="Email"
          className="input input-bordered w-full"
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <input placeholder="Photo URL"
          className="input input-bordered w-full"
          onChange={e => setForm({...form, photo: e.target.value})}
        />

        <input type="password" placeholder="Password"
          className="input input-bordered w-full"
          onChange={e => setForm({...form, password: e.target.value})}
        />

        <button className="btn btn-primary w-full">Register</button>

        <p className="text-sm text-center">
          Already have account? <Link href="/login">Login</Link>
        </p>

      </form>
    </div>
  );
}