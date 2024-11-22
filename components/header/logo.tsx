import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';

interface LogoProps {
    title: string,
    url: string
}

const Logo: React.FC<LogoProps> = ({ title, url }) => {

    return <>
        <Avatar>
            <AvatarImage className="max-w-32" src={url} alt={title} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    </>
};

export default Logo;
