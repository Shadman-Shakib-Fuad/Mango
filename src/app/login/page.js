"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

export default function Login() {

  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const ok = login(form.email, form.password);

    if (ok) {
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white/10 p-8 rounded-xl w-96 space-y-4">

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input type="email" placeholder="Email"
          className="input input-bordered w-full"
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <input type="password" placeholder="Password"
          className="input input-bordered w-full"
          onChange={e => setForm({...form, password: e.target.value})}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="btn btn-primary w-full">Login</button>

        <p className="text-sm text-center">
          No account? <Link href="/register">Register</Link>
        </p>

      </form>
    </div>
  );
}