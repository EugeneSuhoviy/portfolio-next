"use client"

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
  return <Sheet>
    <SheetTrigger>
      <Menu />
    </SheetTrigger>
    {/* TODO: fix undefined */}
    <SheetContent aria-describedby={undefined}>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <ul>
          {items.map((item: { title: string, slug: string }) => {
            return <li key={item.slug}>
              <Link href={`/${item.slug}`} legacyBehavior passHref>
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