import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import LayoutProvider from "../providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Web Dev Quizz",
  description: "Daily quizz for web developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="min-h-screen">
          <SignedOut></SignedOut>
          <SignedIn></SignedIn>
          <LayoutProvider>{children}</LayoutProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
