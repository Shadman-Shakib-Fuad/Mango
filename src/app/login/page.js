"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const success = login(form.email, form.password);

    if (success) {
      alert("Login Successful!");
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card p-6 shadow w-96 bg-base-100">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          className="input input-bordered mt-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input input-bordered mt-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleLogin} className="btn btn-primary mt-4">
          Login
        </button>
      </div>
    </div>
  );
}