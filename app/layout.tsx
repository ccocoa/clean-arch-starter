import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Architecture App",
  description: "Next.js with Clean Architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
