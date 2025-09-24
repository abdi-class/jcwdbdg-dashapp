import * as React from "react";

interface ISignUpLayoutProps {
  children: React.ReactNode; // merepresentasikan bahwa ada component lain yg mau dirender
}

export default function SignUpLayout(props: ISignUpLayoutProps) {
  return (
    <div className="min-h-screen py-32">
      <main>{props.children}</main>
    </div>
  );
}

/**
 * <RootLayout>
 *      <SignupLayout>
 *          <SignUpPage />
 *      <SignupLayout/>
 * </RootLayout>
 */
