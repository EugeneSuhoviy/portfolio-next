"use client"

import useMediaQuery from "@/hooks/useMediaQuery";
import CustomSheet from "@/components/header/custom-sheet";
import Navbar from "@/components/header/navbar";

type HeaderClientProps = {
  items: { title: string, slug: string }[];
}

const HeaderClient = ({ items }: HeaderClientProps) => {
  const isMobile = useMediaQuery('(min-width: 1024px)');

  return isMobile ? <Navbar items={items} /> : <CustomSheet items={items} />;
}

export default HeaderClient;
