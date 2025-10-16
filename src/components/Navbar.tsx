"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// STORE
import useCountStore from "@/stores/countStore";
import useAuthStore from "@/stores/authStore";

export default function Navbar() {
  const count = useCountStore((s) => s.count);
  const { name, login, logout } = useAuthStore();

  const router = useRouter();

  async function keepLogin() {
    try {
      // 1. Ambil data dari localStorage
      if (localStorage.getItem("auth")) {
        const dataLocal = JSON.parse(localStorage.getItem("auth") || "");

        // 2. Gunakan data dari localStorage untuk call API mencari data ke backendless
        const res = await fetch(
          `https://calmingstore-us.backendless.app/api/data/accounts?where=${encodeURIComponent(
            `objectId='${dataLocal?.objectId}'`
          )}`
        );
        const data = await res.json();

        // 3. Pastikan datanya ada lalu simpan ulang ke zustand
        if (data[0]) {
          login(data[0].email, data[0].username);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(function () {
    keepLogin();
  }, []);

  return (
    <nav className="bg-red-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span>DashApp {count}</span>
          </Link>

          {/* Navigation page */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="/dashboard">
              <span>Dashboard</span>
            </Link>
            <Link href="/blog">
              <span>Blog</span>
            </Link>
          </div>

          {name ? (
            <div className="flex items-center">
              <span>{name}</span>
              <button
                type="button"
                className="bg-slate-200 rounded-xl shadow px-3 py-2"
                onClick={() => {
                  logout();
                  localStorage.removeItem("auth");
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                className="bg-slate-200 rounded-xl shadow px-3 py-2"
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="bg-slate-200 rounded-xl shadow px-3 py-2"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
