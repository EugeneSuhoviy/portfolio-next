import type { Metadata } from "next";
import "./globals.css";
import { getHeader } from "../lib/api";
import { ThemeProvider } from "../components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { Inter } from 'next/font/google'
import Navbar from "@/components/header/navbar";
import Logo from "@/components/header/logo";
import Footer from "@/components/footer";
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

      <div className="absolute -z-10 inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      
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
