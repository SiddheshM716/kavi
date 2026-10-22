import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaviarasu Subramani | Machine Learning & Full-Stack Developer",
  description:
    "Portfolio of Kaviarasu Subramani – Final-year CSE student at SRMIST specializing in Machine Learning, Deep Learning pipelines, PyTorch, XGBoost, React, Next.js, and FastAPI.",
  keywords: [
    "Kaviarasu Subramani",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Deep Learning",
    "PyTorch",
    "React",
    "Next.js",
    "FastAPI",
    "SRMIST",
    "Chennai",
  ],
  authors: [{ name: "Kaviarasu Subramani" }],
  openGraph: {
    title: "Kaviarasu Subramani | Portfolio",
    description:
      "Explore machine learning systems, deep neural network projects, and full-stack web applications by Kaviarasu Subramani.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060911] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
