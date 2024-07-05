import { type ClassValue, clsx } from "clsx";
import { Rubik, Teko } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const teko = Rubik({ display: "swap", subsets: ["latin"], weight: "600", variable: "--font-teko" });
export const teko2 = Rubik({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-rubik" });
