import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]) {
  const classes = twMerge(clsx(inputs));
  return classes || undefined;
}
