"use client";

export default function Login() {
  return (
    <div className="flex justify-center mt-20">
      <div className="card p-6 shadow w-96">
        <h2 className="text-xl font-bold">Login</h2>

        <input className="input mt-2" placeholder="Email" />
        <input className="input mt-2" placeholder="Password" type="password" />

        <button className="btn mt-4">Login</button>
      </div>
    </div>
  );
}