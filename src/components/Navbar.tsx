"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem active={active} setActive={setActive} item="Home">
        </MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">All Services</HoveredLink>
            <HoveredLink href="/services">Web Development</HoveredLink>
            <HoveredLink href="/services">AI/Ml</HoveredLink>
            <HoveredLink href="/services">Blockcahin Development</HoveredLink>
            <HoveredLink href="/services">SEO</HoveredLink>
            <HoveredLink href="/services">Android Development</HoveredLink>
            <HoveredLink href="/services">IOS Development</HoveredLink>
            </div>
        </MenuItem>
        <Link href={"/contactus"}>
        <MenuItem active={active} setActive={setActive} item="Contact Us">
        </MenuItem>
        </Link>
        <Link href={"/portfolio"}>
        <MenuItem active={active} setActive={setActive} item="Portfolio">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
