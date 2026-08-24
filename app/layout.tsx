import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import Phone from "@/components/Phone/Phone";
import ClientWrapper from "@/components/ClientWrapper";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Inclusive Services & Supplies Ltd",
    absolute: "Inclusive Services & Supplies Ltd",
  },
  description:
    "Inclusive Services & Supplies Ltd, Empowering sustainable growth through inclusive services,innovative solutions, and reliable supplies for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} antialiased bg-[#F7F5F2]`}>
        <ClientWrapper>{children}</ClientWrapper>

        <Phone />
        <Footer />
      </body>
    </html>
  );
}
