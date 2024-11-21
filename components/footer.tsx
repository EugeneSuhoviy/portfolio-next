import React from 'react';

interface FooterProps {
  text: string
}

const Footer: React.FC<FooterProps> = ({text}) => {
  return (
    <div>
     footer {text}
    </div>
  );
};

export default Footer;
