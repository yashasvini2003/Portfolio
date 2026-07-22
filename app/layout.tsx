import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yashasvini Bhanuraj | Software Developer Portfolio",
  description:
    "Portfolio of Yashasvini Bhanuraj, a Toronto-based software developer, business analyst, and UI/UX designer.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
