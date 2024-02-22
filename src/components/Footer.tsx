import React, { ReactNode } from "react";
import Logo from "./Logo";

import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks: ReactNode[] = [
    <Facebook key="f" className="social-link" />,
    <Instagram key="i" className="social-link" />,
    <Twitter key="t" className="social-link" />,
    <Github key="g" className="social-link" />,
    <Youtube key="y" className="social-link" />,
  ];
  return (
    <footer className="pt-20 pb-4">
      <div className="container mb-12 justify-center flex flex-col lg:flex-row max-w-screen">
        <div className="flex flex-col md:items-center lg:items-center gap-4 lg:gap-6">
          <Logo />
          <p className="text-lg">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            {socialLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
