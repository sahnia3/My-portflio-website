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
            <div className="absolute top-0 left-0 w-full h-[30vw] overflow-hidden z-[10]">
              <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute left-0 w-full top-[-26vw]"
              >
                <source src="/blackhole.webm" type="video/webm" />
              </video>
            </div>
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
