import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/logo.png" width={150} height={150} alt="logo" />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold tracking-wide">
        </h1>
        <div className="absolute bottom-0 right-0 mb-1 mr-1 w-2 h-2 rounded-full bg-sky-700" />
      </div>
    </Link>
  );
};

export default Logo;