import type { MotionProps } from "framer-motion";

declare global {
  export namespace FramerMotion {
    export type Duration = number;

    export type AnimationProps = {
      duration?: FramerMotion.Duration;
      animation?: MotionProps | UI.Animations;
    };

    export type AnimationArgs = {
      duration?: number;
    };

    /**
     * Used for creating animation callback functions.
     */
    export type AnimationFunction = (
      config: FramerMotion.AnimationArgs
    ) => MotionProps;

    export type Props<T> = Omit<T, keyof FramerMotion.AnimationProps> &
      FramerMotion.AnimationProps;

    export type Element<T> = FramerMotion.Props<Omit<T, "style"> & MotionProps>;
  }
}
