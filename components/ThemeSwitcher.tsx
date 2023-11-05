"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";
import { cx } from "@/lib/cx";
export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(
    //@ts-ignore
    document.documentElement.getAttribute("data-theme") === "dark"
  );
  const handleClick = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    //@ts-ignore
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "light" : "dark"
    );
  }, [isDark]);
  return (
    <button
      onClick={handleClick}
      className={cx(
        "w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1",
        !isDark ? "bg-black text-light" : "bg-white text-dark"
      )}
      aria-label="theme-switcher"
    >
      {isDark ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </button>
  );
};
