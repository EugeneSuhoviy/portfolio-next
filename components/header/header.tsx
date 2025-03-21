import Logo from "@/components/header/logo";
import ThemeToggle from "@/components/theme-toggle";
import { getHeader } from "@/lib/api";
import HeaderClient from "@/components/header/header-client";

const Header: React.FC = async () => {
    const { data: { header: data } } = await getHeader();

    return <header className="flex justify-between w-100 items-center min-h-[120px] px-5 py-5">
        <Logo url={data.logo.url} title={data.logo.title} />

        <div className="flex">
            <ThemeToggle />
            <HeaderClient items={data.navbarElementsCollection.items} />
        </div>
    </header>
}

export default Header;
