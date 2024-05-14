import { DURATION } from "~/utils/animations/constants";

export const slideUpFull: FramerMotion.AnimationFunction = ({ duration = DURATION.DEFAULT }) => ({
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration,
    },
  },
});
