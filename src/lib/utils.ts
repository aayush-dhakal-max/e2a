import { type ClassValue, clsx } from "clsx";
import { Teko } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const teko = Teko({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-teko" });
export const teko2 = Teko({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-marhey" });
