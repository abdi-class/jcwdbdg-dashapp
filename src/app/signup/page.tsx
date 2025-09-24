import * as React from "react";

export default function SignUpPage() {
  return (
    <div className="bg-white p-6 shadow rounded-2xl w-96 m-auto my-5">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Input email"
          className="shadow p-2 rounded"
        />
        <input
          type="password"
          placeholder="Input password"
          className="shadow p-2 rounded"
        />
        <button type="button" className="bg-slate-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
