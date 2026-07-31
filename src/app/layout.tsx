import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sunbeds | Your Center for Distribution",
  description:
    "Sunbeds is a next-generation hotel distribution platform that brings hotels and global distribution partners together through one intelligent connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body
        className="min-h-screen flex flex-col bg-white text-[#171717]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
