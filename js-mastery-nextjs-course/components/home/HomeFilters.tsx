"use client";
import { HomePageFilters } from "@/constants/filter";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "newest";

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none 
           ${active === item.value ? "bg-primary-100 text-primary-500" : "dark:text-light bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:hover:bg-dark-300"}`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
