import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLOXA | Brand Discovery for Designers",
  description:
    "Discover FLOXA by FlumenX, a brand discovery platform designed to help creative professionals understand client vision, brand personality, and creative direction before design begins. Clarity Before Creation.",
  keywords: [
    "Brand discovery platform",
    "Brand discovery software",
    "Brand discovery for designers",
    "Client discovery tool",
    "Branding questionnaire",
    "Brand identity workflow",
    "Creative brief tool",
    "Client onboarding for designers",
    "Brand strategy tools",
    "FlumenX",
    "FLOXA",
  ],
  authors: [{ name: "FlumenX" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className="bg-black text-[#f5f5f7] antialiased selection:bg-[#0071e3]/30 selection:text-white min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
