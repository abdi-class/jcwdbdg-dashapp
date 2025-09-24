import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import * as React from "react";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
