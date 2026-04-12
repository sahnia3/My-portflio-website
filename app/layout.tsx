import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Sahni",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-[#030014] min-h-screen">
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              className="rotate-180 absolute top-[-340px] w-full object-cover z-[10]"
            >
              <source src="/blackhole.webm" type="video/webm" />
            </video>
            <StarsCanvas />
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
