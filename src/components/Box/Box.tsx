import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useAnimation } from "~/hooks/useAnimation";
import { cx } from "~/utils/cx";

export const Box = forwardRef<Ref.Div, UI.Props<Html.Div>>(
  ({ tw, className, animation, duration, ...props }, ref) => {
    const animate = useAnimation(animation, { duration });
    return <motion.div {...props} {...animate} className={cx(className, tw)} ref={ref} />;
  },
);
