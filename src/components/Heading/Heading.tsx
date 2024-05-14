import { createElement, forwardRef } from "react";

type HeadingProps = Html.Heading & {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = forwardRef<any, HeadingProps>(({ type, ...props }, ref) => {
  type = type || "h1";
  return createElement(type, { ...props, ref });
});
