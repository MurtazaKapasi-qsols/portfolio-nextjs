import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const unbounded = Unbounded({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "We build your digital future with branding, design, and development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
