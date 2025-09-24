import Link from "next/link";
import * as React from "react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-slate-200 p-4">
      <nav className="flex flex-col">
        <Link
          href="/dashboard"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/create-content"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          Create Content
        </Link>
        <Link
          href="/dashboard/create-list"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          Content List
        </Link>
        <Link
          href="/dashboard/profile"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          Profile
        </Link>
      </nav>
    </aside>
  );
}
