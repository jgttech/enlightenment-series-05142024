import type { MotionProps } from "framer-motion";
import { animations } from "~/utils/animations";

export const useAnimation = (
  name?: UI.Animations,
  props?: FramerMotion.AnimationArgs,
): MotionProps => {
  if (!name) {
    return {};
  }
  const animation = animations?.[name];
  if (!animation) {
    return {};
  }
  props = props || {};
  return animation(props);
};
