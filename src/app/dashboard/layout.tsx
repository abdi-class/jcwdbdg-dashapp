import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import * as React from "react";

export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard Menu",
  description: "Access all management menu",
};

export default function DashboardLayout(props: IDashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-red-300">{props.children}</main>
    </div>
  );
}
