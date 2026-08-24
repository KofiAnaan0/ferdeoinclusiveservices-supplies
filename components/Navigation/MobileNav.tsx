"use client";

import { navLinks } from "@/constants/constant";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

type Prop = {
  navClose: () => void;
  showNav: boolean;
  handleshowModel: () => void;
};

const MobileNav = ({ navClose, showNav, handleshowModel }: Prop) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
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
    if (showNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [showNav]);

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} h-screen w-full bg-[#FFFFF] opacity-[70%] z-[1002] inset-0 transform transition`}
      ></div>

      {/* Menu */}
      <div
        className={`fixed ${navOpen} z-[1054] h-full w-[80%] md:w-[60%] flex flex-col justify-center items-center transform transition duration-500 delay-300 bg-[#FAFAFA] space-y-6`}
      >
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            onClick={navClose}
            className="text-[#1B3A6B] border-b-2 border-b-[#E8A33D] w-fit font-medium text-sm md:text-base"
          >
            {link.label}
          </Link>
        ))}

        <div className="flex flex-col items-center justify-center w-fit space-y-4">
          <Button
            variant="outline"
            size="default"
            onClick={() => (window.location.href = "tel:+12244643952")}
          >
            Contact Us
          </Button>
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
                className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-full bg-[#F7F5F2]"
              >
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Inclusive Technology
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Inclusive Farm Supplies
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Inclusive Industries
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <CgClose
          onClick={navClose}
          className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 cursor-pointer text-[#1B3A6B]"
        />
      </div>
    </div>
  );
};

export default MobileNav;
