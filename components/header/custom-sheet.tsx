"use client"

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Link from "next/link";


type CustomSheetProps = {
  items: { title: string, slug: string }[];
}

const CustomSheet = ({ items }: CustomSheetProps) => {
  const [open, setOpen] = useState(false);

  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger className="lg:hidden">
      <Menu />
    </SheetTrigger>
    {/* TODO: fix undefined */}
    <SheetContent aria-describedby={undefined}>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <ul>
          {items.map((item: { title: string, slug: string }) => {
            return <li key={item.slug}>
              <Link href={`/${item.slug}`} onClick={() => { setOpen(false) }}>
                {item.title}
              </Link>
            </li>
          })}
        </ul>
      </SheetHeader>
    </SheetContent>
  </Sheet>
}

export default CustomSheet;