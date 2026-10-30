import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floxa - Apple (IN)",
  description:
    "With a Floxa subscription, get intelligent tools in Final Cut Pro, Logic Pro, and Pixelmator Pro, plus premium productivity content.",
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
    <html lang="en-IN" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-black text-[#f5f5f7] antialiased selection:bg-[#0071e3]/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
