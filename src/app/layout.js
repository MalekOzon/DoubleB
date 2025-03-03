import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Children from "./Children";
import Head from 'next/head';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Double B",
  description: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        {/* ربط أيقونة الموقع */}
        <link rel="icon" href="/Group.png" />
      </Head>
      

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Children>
        {children}
      </Children>
      </body>
    </html>
  );
}
