import type {animations} from '../../src/utils/animations';

declare global {
  export namespace UI {
    export type Animations = keyof typeof animations;
    export type Props<T = {}> = Omit<T, "animation"> & {
      animation?: UI.Animations,
      duration?: number,
    }
  }
}
