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
      <body className={`flex flex-col min-h-screen font-sans text-gray-700 dark:text-gray-200 relative ${inter.className}`}>

        <div className="z-[-1] absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse 60% 60% at 50% 50%, #000 50%, transparent 100%)]"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-between w-100 items-center min-h-20 px-5 py-5">

            <Logo url={data.logo.url} title={data.logo.title} />
            <div className="flex">
              <ThemeToggle />
              <Navbar items={data.navbarElementsCollection.items} />
            </div>
          </header>
          <main className="max-w-3xl mx-auto slide-enter-content" >
            {children}
          </main>
          <Footer text="sdf" />
        </ThemeProvider>
      </body>
    </html>
  );
}
