import React from "react";
import { fonts, sfPro } from "@/styles/fonts";
import { Search, User } from "lucide-react";
import Image from "next/image";


const Header: React.FC = () => {
  const categories = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Villa",
    "Tropical",
    "New",
    "Amazing pool",
    "Beach house",
    "Island",
    "Camping",
    "Apartment",
    "House",
    "Lakefront",
    "Farm House",
    "Treehouse",
    "Cabins",
    "Castles",
    "Lakeside",
  ];

  // Map category labels to icon image paths under public/
  const categoryIcons: Record<string, string> = {
    Rooms: "/assets/categories/rooms.png",
    Mansion: "/assets/categories/mansion.png",
    Countryside: "/assets/categories/countryside.png",
    Villa: "/assets/categories/villa.png",
    Tropical: "/assets/categories/tropical.png",
    New: "/assets/categories/new.png",
    "Amazing pool": "/assets/categories/pool.png",
    "Beach house": "/assets/categories/beach-house.png",
    Island: "/assets/categories/island.png",
    Camping: "/assets/categories/camping.png",
    Apartment: "/assets/categories/apartment.png",
    House: "/assets/categories/house.png",
    Lakefront: "/assets/categories/lakefront.png",
    "Farm House": "/assets/categories/farm-house.png",
    Treehouse: "/assets/categories/treehouse.png",
    Cabins: "/assets/categories/cabins.png",
    Castles: "/assets/categories/castles.png",
    Lakeside: "/assets/categories/lakeside.png",
  };

  return (
    <>
      <header className={`w-full bg-white border-b border-gray-200 sticky top-0 z-50 ${fonts.quicksand.className}`}>
        <div className="flex items-center justify-between container mx-auto px-4 md:px-6 bor py-3 md:py-4">
          <div className="flex items-center">
            <Image src="/assets/icon.png" alt="ALX" width={50} height={50} priority />
          </div>

          {/* Mobile / Tablet search pill */}
          <button className="md:hidden flex items-center justify-between flex-1 mx-3 rounded-full pl-4 pr-2 py-2 shadow-sm border border-[#F0F0F0] bg-white">
            <div className="text-left">
              <div className="text-[13px] font-medium text-[#161117]">Where to</div>
              <div className="text-[12px] text-[#BEBEBE]">Location • Date • Add guest</div>
            </div>
            <span className="ml-3 bg-[#FFB800] text-white p-2 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5" />
            </span>
          </button>

          <div className="hidden md:flex items-center rounded-full pl-4 pr-2 py-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#F6F6F6]">
            <div className="flex items-center divide-x divide-[#E9E9E9]">
              <div className="px-6">
                <div className="text-sm font-medium tracking-normal leading-[100%] text-[#161117]">Location</div>
                <div className="text-[13px] py-2 font-normal tracking-normal leading-[100%] text-[#BEBEBE]">Search for destination</div>
              </div>
              <div className="px-6">
                <div className="text-sm font-medium tracking-normal leading-[100%] text-[#161117]">Check in</div>
                <div className="text-[13px] py-2 font-normal leading-[100%] text-[#BEBEBE]">Add date</div>
              </div>
              <div className="px-6">
                <div className="text-sm font-medium tracking-normal leading-[100%] text-[#161117]">Check out</div>
                <div className="text-[13px] py-2 font-normal tracking-normal leading-[100%] text-[#BEBEBE]">Add date</div>
              </div>
              <div className="px-6">
                <div className="text-sm font-medium tracking-normal leading-[100%] text-[#161117]">People</div>
                <div className="text-[13px] py-2 font-normal tracking-normal  leading-[100%] text-[#BEBEBE]">Add guest</div>
              </div>
            </div>
            <button className="ml-3 bg-[#FFB800] hover:bg-[#FFB800] text-white p-2 rounded-full flex items-center justify-center">
              <Search className="w-7 h-7" />
            </button>
          </div>

          <div className={`${sfPro.className} hidden md:flex items-center space-x-3`}>
            <button className={` px-8 py-5 rounded-full bg-[#34967C] text-white text-base font-normal tracking-normal leading-[100%] hover:bg-[#34967C]/70 cursor-pointer transition-colors`}>
              Sign in
            </button>
            <button className=" cursor-pointer px-8 py-5 rounded-full border border-[#ECECEC] text-base font-normal tracking-normal leading-[100%] text-black hover:bg-[#F6F6F6] transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile profile icon */}
          <button aria-label="Account" className="md:hidden ml-2 inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#ECECEC] bg-white">
            <User className="w-5 h-5 text-[#34967C]" />
          </button>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="px-4 md:px-6 py-2 md:py-3 border-b border-[#F6F6F6] bg-white container mx-auto">
        <div className="relative">
          {/* Scrollable row */}
          <div className="w-full flex items-center gap-5 sm:gap-6 md:gap-8 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                className="group flex flex-col items-center gap-1 min-w-[64px] sm:min-w-[72px] md:min-w-[75px] flex-shrink-0 text-[11px] sm:text-[12px] font-medium tracking-normal leading-[100%] text-[#222222]  transition-colors"
              >
                <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-[#BEBEBE] bg-white group-hover:border-[#BEBEBE] group-hover:text-[#BEBEBE]">
                  <Image
                    src={categoryIcons[category] || "/file.svg"}
                    alt={`${category} icon`}
                    width={16}
                    height={16}
                  />
                </span>
                <span className="whitespace-nowrap leading-none">
                  {category}
                </span>
                <span className="mt-1 h-0.5 w-0 bg-gray-800 transition-all duration-200 group-hover:w-6"></span>
              </button>
            ))}
          </div>

          {/* Edge fade to hint scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 md:w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 md:w-8 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </>
  );
};

export default Header;
