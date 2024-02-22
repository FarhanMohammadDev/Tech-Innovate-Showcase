import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/logo.png" width={150} height={150} alt="logo" />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold tracking-wide">
          {/* Ajoutez le texte du logo ici */}
        </h1>
        {/* Utilisez des marges pour positionner le point dans la place du coin en bas à droite */}
        <div className="absolute bottom-0 right-0 mb-1 mr-1 w-2 h-2 rounded-full bg-sky-700" />
      </div>
    </Link>
  );
};

export default Logo;