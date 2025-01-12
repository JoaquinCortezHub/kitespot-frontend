// Server Component (no 'use client' directive)
import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "KiteSpot",
  description: "Fullstack weather app with Next and Nest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout><Header></Header>{children}</ClientLayout>;
}
