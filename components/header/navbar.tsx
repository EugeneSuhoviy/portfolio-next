"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
interface NavbarProps {
    items: { title: string, slug: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {items.map((item: { title: string, slug: string }) => {
                    const isActive = pathname.includes(`${item.slug}`)

                    return <NavigationMenuItem key={item.slug}>
                        <Link href={`/${item.slug}`} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(`${navigationMenuTriggerStyle()} ${isActive ? 'bg-accent text-accent-foreground' : ''}`)}>
                                {item.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>;
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
