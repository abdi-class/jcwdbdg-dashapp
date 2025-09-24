import Sidebar from "@/components/Sidebar";
import * as React from "react";

export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: IDashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-red-300">{props.children}</main>
    </div>
  );
}
