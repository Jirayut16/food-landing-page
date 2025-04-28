import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Footer } from "@/components/footer";
import { AnimatedHeader } from "@/components/ui/animated-header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeliciousEats - Extraordinary Food Experience",
  description:
    "Experience culinary delights at DeliciousEats. Fresh ingredients, passionate chefs, unforgettable flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <AnimatedHeader />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
