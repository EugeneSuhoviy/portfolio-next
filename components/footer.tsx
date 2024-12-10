import React from 'react';

interface FooterProps {
  text: string
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="mt-auto flex justify-center opacity-50" style={{ "--stagger": 7 }} data-animate>
      {text}
      <span className="text-sm op50"> <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021-PRESENT © Eugene Suhoviy</span>
    </footer>
  );
};

export default Footer;
