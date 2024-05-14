import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useAnimation } from "~/hooks/useAnimation";

export const Box = forwardRef<Ref.Div, UI.Props<Html.Div>>(
  ({ tw, animation, duration, ...props }, ref) => {
    const animate = useAnimation(animation, { duration });
    return <motion.div {...props} {...animate} ref={ref} />;
  },
);
