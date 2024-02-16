import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
