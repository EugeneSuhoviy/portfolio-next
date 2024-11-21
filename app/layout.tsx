import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { getHeader } from "../lib/api";
import Logo from "@/components/header/logo";

export const metadata: Metadata = {
  title: "Eugene Suhoviy",
  description: "Eugene Suhoviy Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: { header: data } } = await getHeader();


  return (
    <html lang="en">
      <body>
        <header className="flex justify-between max-w-3xl mx-auto items-center">
          <Logo url={data.logo.url} title={data.logo.title} />
          <Navbar items={data.navbarElementsCollection.items} />
        </header>
        {children}
      </body>
    </html>
  );
}
