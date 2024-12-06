"use client";

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { Toaster } from "sonner";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>
    {children}
    <ToasterProvider />
  </NextThemesProvider>
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();

  return <Toaster theme={resolvedTheme === "dark" ? "dark" : "light"}></Toaster>
}

