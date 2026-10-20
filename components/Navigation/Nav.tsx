"use client";

import { navLinks } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import
import React, { useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Button } from "../ui/Button";
import Logo from "@/public/logo/logo.png";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  navOpen: () => void;
  handleshowModel: () => void;
};

const Nav = ({ navOpen }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname(); // Get current path
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    const handleNavBg = () => {
      if (window.scrollY > 50) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handleNavBg);

    return () => window.removeEventListener("scroll", handleNavBg);
  }, []);

  return (
    <div
      className={`${
        navBg ? "bg-[#FFFFFF]/80 shadow-sm backdrop-blur-lg" : "bg-transparent"
      } fixed z-[100] h-[12vh] w-full transition-all duration-100`}
    >
      <div className="w-[90%] lg:w-[80%] h-full flex justify-between items-center mx-auto">
        {/* logo */}
        <Link
          href={"/"}
          className="cursor-pointer hover:scale-110 hover:rotate-1 transition duration-100"
        >
          <Image
            src={Logo}
            alt={"logo"}
            width={200}
            height={60}
            className="object-contain w-[140px] md:w-[180px] h-auto"
          />
        </Link>

        {/* nav links */}
        <div className="hidden lg:flex space-x-4 items-center justify-center py-3 px-6 ">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                href={link.url}
                key={link.id}
                className={`text-[#1B3A6B] font-normal text-sm hover:text-[#D2691E]/95 hover:rotate-1 hover:scale-110 transition duration-100 relative pb-1 ${
                  isActive ? "after:scale-x-100" : "after:scale-x-0"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E8A33D] after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CAT */}
        <div className="hidden lg:flex space-x-2 items-center ">
          {/* login */}
          <Button
            variant="outline"
            size="default"
            // onClick={() => {
            //   window.dispatchEvent(new CustomEvent("openChatWidget"));
            // }}
          >
            Contact Us
          </Button>

          {/* Demo Button */}
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="w-full md:w-fit"
          >
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button className="border-[#7a2a0e] w-full md:w-fit flex items-center justify-center gap-3 px-6">
                  Explore Our Ventures
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-full"
              >
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/media")}
                >
                  Inclusive Technology
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/farm")}
                >
                  Inclusive Farm Supplies
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/industries")}
                >
                  Inclusive Industries
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Hamburger Menu */}
        <RiMenuFill
          onClick={navOpen}
          className="text-[#1B3A6B] w-8 h-8 cursor-pointer transition-all duration-100 lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
