import HeaderA from "./HeaderA";
import HeaderB from "./HeaderB";
import HeaderC from "./HeaderC";

export const HEADER_STYLES = {
  A: HeaderA,
  B: HeaderB,
  C: HeaderC
}

export type HeaderStyleKey = keyof typeof HEADER_STYLES;