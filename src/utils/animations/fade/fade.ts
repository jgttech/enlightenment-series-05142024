import { DURATION } from "~/utils/animations/constants";

export const fade: FramerMotion.AnimationFunction = ({ duration = DURATION.DEFAULT }) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration,
    },
  },
});
