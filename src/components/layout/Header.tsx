import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";

export default function Header() {
  return (
    <header className="text-zinc-200 w-full fixed">
      <div className="bg-dark flex justify-between text-xs px-20 py-2">
        <div className="flex gap-1 items-center font-[400]">
          <BsTelephone />
          <p>+234 90 654 6113</p>
        </div>
        <div className="flex gap-4 items-center">
          <p>Get 50% Off on Selected Items</p> <p>|</p>{" "}
          <Link href="#" className="underline">
            Shop Now
          </Link>
        </div>
        <p>Location</p>
      </div>
      <div>
        <div>
          <Image src="/jolt.png" width={70} height={70} alt="logo" />
          <h1></h1>
        </div>
      </div>
    </header>
  );
}
