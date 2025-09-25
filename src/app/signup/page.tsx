"use client";
import axios from "axios";
import * as React from "react";

export default function SignUpPage() {
  const inUsernameRef = React.useRef<HTMLInputElement>(null);
  const inEmailRef = React.useRef<HTMLInputElement>(null);
  const inPasswordRef = React.useRef<HTMLInputElement>(null);

  async function onBtSignup() {
    try {
      const res = await axios.post(
        "https://calmingstore-us.backendless.app/api/data/accounts",
        {
          username: inUsernameRef.current?.value,
          email: inEmailRef.current?.value,
          password: inPasswordRef.current?.value,
        }
      );

      console.log(res.data); // untuk memeriksa apakah response success
      alert("Registrasi berhasil");
    } catch (error) {
      console.log(error);
      alert("Registrasi gagal");
    }
  }
  return (
    <div className="bg-white p-6 shadow rounded-2xl w-96 m-auto my-5">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Input username"
          className="shadow p-2 rounded"
          ref={inUsernameRef}
        />
        <input
          type="email"
          placeholder="Input email"
          className="shadow p-2 rounded"
          ref={inEmailRef}
        />
        <input
          type="password"
          placeholder="Input password"
          className="shadow p-2 rounded"
          ref={inPasswordRef}
        />
        <button
          type="button"
          onClick={onBtSignup}
          className="bg-slate-600 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
