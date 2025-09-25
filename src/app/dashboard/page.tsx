"use client";

import * as React from "react";
import useAuthStore from "@/stores/authStore";

export default function DashboardPage() {
  const { email, name } = useAuthStore((s) => s);
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Page</h1>
      <div>
        Welcome {email}, {name}
      </div>
    </div>
  );
}
