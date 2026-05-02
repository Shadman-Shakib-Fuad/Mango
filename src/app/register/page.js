"use client";

export default function Register() {
  return (
    <div className="flex justify-center mt-20">
      <div className="card p-6 shadow w-96">
        <h2 className="text-xl font-bold">Register</h2>

        <input className="input mt-2" placeholder="Name" />
        <input className="input mt-2" placeholder="Email" />
        <input className="input mt-2" placeholder="Photo URL" />
        <input className="input mt-2" placeholder="Password" type="password" />

        <button className="btn mt-4">Register</button>
      </div>
    </div>
  );
}