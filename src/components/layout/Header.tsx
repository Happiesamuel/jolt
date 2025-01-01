import { header } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsCart3, BsTelephone } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Input } from "../ui/input";
import HeaderCategory from "./HeaderCategory";
import { getCategoriesList, getProductsCategoriesList } from "@/lib/data";

export default async function Header() {
  const [{ products }, data] = await Promise.all([
    getProductsCategoriesList(),
    getCategoriesList(),
  ]);
  return (
    <header className="text-dark w-full fixed">
      <div className="bg-dark text-zinc-200 flex justify-between text-xs px-20 py-2">
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
      <div className="flex justify-between items-center px-20 text-base py-3">
        <Image src="/jolt.png" width={60} height={60} alt="logo" />
        <div className="flex items-center gap-8">
          {header.map((link) => {
            return link.id !== 1 ? (
              <Link href={link.routes} key={link.id}>
                {link.title}
              </Link>
            ) : (
              <HeaderCategory products={products} data={data} key={link.id} />
            );
          })}
        </div>
        <div className="flex items-center w-[30%] border px-3 border-zinc-300 rounded-full">
          <Input
            type="text"
            placeholder="Search product"
            className="placeholder:text-zinc-400 border-none outline-none tracking-wider"
          />
          <HiMagnifyingGlass className="text-zinc-500 font-bold" />
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1">
            <BiUser />
            <p>Account</p>
          </Link>
          <Link href="/" className="flex items-center gap-1">
            <BsCart3 />
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
