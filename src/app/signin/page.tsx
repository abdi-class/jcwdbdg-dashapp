"use client";
import useAuthStore from "@/stores/authStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function SignInPage() {
  const router = useRouter();
  const inEmailRef = React.useRef<HTMLInputElement>(null);
  const inPasswordRef = React.useRef<HTMLInputElement>(null);
  const login = useAuthStore((s) => s.login);
  async function onBtSignIn() {
    try {
      // const res = await axios.get(
      //   "https://calmingstore-us.backendless.app/api/data/accounts",
      //   {
      //     params: {
      //       where: `email='${inEmailRef.current?.value}' AND password='${inPasswordRef.current?.value}'`,
      //     },
      //   }
      // );

      const res = await fetch(
        `https://calmingstore-us.backendless.app/api/data/accounts?where=${encodeURIComponent(
          `email='${inEmailRef.current?.value}' AND password='${inPasswordRef.current?.value}'`
        )}`
      );

      // jika hasil response === array kosong, maka lempar ke catch error
      const data = await res.json();
      if (!data.length) {
        throw new Error("Account not exist");
      }
      console.log("LOG RES SIGNIN", data);
      alert("Signin berhasil");
      login(data[0].email, data[0].username);
      router.replace("/");
    } catch (error) {
      console.log(error);
      alert("Signin gagal");
    }
  }
  return (
    <div className="bg-white p-6 shadow rounded-2xl w-96 m-auto my-5">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form className="flex flex-col gap-4">
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
          onClick={onBtSignIn}
          className="bg-slate-600 text-white py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
