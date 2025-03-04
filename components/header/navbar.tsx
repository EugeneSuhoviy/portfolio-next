import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
interface NavbarProps {
    items: { title: string, slug: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {items.map((item: { title: string, slug: string }) => {
                    return <NavigationMenuItem key={item.slug}>
                        <Link href={`/${item.slug}`} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
