"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// STORE
import useCountStore from "@/stores/countStore";
import useAuthStore from "@/stores/authStore";

export default function Navbar() {
  const count = useCountStore((s) => s.count);
  const username = useAuthStore((s) => s.name);

  const router = useRouter();
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

          {username ? (
            <span>{username}</span>
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
