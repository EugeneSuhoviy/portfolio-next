import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';

interface LogoProps {
    title: string,
    url: string
}

const Logo: React.FC<LogoProps> = ({ title, url }) => {
    return <>
        <Link href={'/'}>
            <Avatar>
                <AvatarImage className="max-w-20 rounded-full" src={url} alt={title} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </Link>
    </>
};

export default Logo;
