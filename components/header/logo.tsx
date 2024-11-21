import Image from 'next/image';

interface LogoProps {
    title: string,
    url: string
}

const Logo: React.FC<LogoProps> = ({ title, url }) => {

return <Image className="max-w-32" src={url} width={128} height={128} alt={title}/>
};

export default Logo;
