import ButtonA from "./ButtonA";
import ButtonB from "./ButtonB";
import ButtonC from "./ButtonC";

export const BUTTON_STYLES = {
  A: ButtonA,
  B: ButtonB,
  C: ButtonC
}

export type ButtonStyleKey = keyof typeof BUTTON_STYLES;