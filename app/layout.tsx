import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { getHeader } from "../lib/api";
import Logo from "@/components/header/logo";
import Footer from "@/components/footer";
import { ThemeProvider } from "../components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-between w-100 items-center">
            <Logo url={data.logo.url} title={data.logo.title} />
            <div className="flex">
              <ThemeToggle />
              <Navbar items={data.navbarElementsCollection.items} />
            </div>
          </header>
          <main className="max-w-3xl mx-auto" >
            {children}
          </main>
          <Footer text="sdf" />
        </ThemeProvider>
      </body>
    </html>
  );
}
