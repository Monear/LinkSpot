// app/layout.tsx

import "../../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkSpot - Social Media Made Easy",
  description: "We possess the tools to address your social marketing needs effectively.",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
  metadataBase: new URL("http://localhost:3000"), 
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <div className={`${inter.className} bg-zinc-900 text-white RootLayout`}>
        {children}
      </div>
  );
}