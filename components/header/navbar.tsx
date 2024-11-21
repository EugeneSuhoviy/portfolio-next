import Link from "next/link";

interface NavbarProps {
    items: { title: string, slug: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    console.log(items);

    return (
        <ul className="flex gap-4">
            {items.map((item: { title: string, slug: string }) => {
                return <li key={item.slug}>
                    <Link href={item.slug}>{item.title}</Link>
                </li>;
            })}
        </ul>
    );
};

export default Navbar;
