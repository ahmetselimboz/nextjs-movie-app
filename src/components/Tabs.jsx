"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "En Son",
      url: "now_playing",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 flex items-center justify-center gap-10 text-lg font-bold bg-gray-200 dark:bg-neutral-800">
      {tabs.map((tab, i) => (
        <Link key={i}
          href={`/?genre=${tab.url}`}
          className={`transition-all text-lg dark:hover:text-teal-300 hover:text-teal-700 ${tab.url === genre ? "underline dark:text-teal-300 text-teal-700" : "dark:text-white text-neutral-900" }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
