// app/layout.tsx
import "./globals.css"; // make sure Tailwind is imported here
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "iKore | AI-Powered Automation for Business",
  description:
    "iKore helps you automate workflows, streamline operations, and grow faster with AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-serif bg-white text-black">{children}</body>
    </html>
  );
}
