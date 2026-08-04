import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontBody = localFont({
  src: "../fonts/MyriadPro-Regular.otf",
  variable: "--font-body",
  display: "swap",
});

const fontHeading = localFont({
  src: [
    { path: "../fonts/AcuminVariableConcept.otf", weight: "200 900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const fontHelvetica = localFont({
  src: [
    { path: "../fonts/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Helvetica-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
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
    <html
      lang="en"
      className={`${fontBody.variable} ${fontHeading.variable} ${fontHelvetica.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col bg-white text-[#171717]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
