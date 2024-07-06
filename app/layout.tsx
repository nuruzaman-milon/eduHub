import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/service/mongo";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "EduHub - World's Best Learning Hub",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-center"/>
      </body>
    </html>
  );
}
