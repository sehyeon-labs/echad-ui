import ContentA from "./ContentA";
import ContentB from "./ContentB";

export const CONTENT_STYLES = {
  A: ContentA,
  B: ContentB
}

export type ContentStyleKey = keyof typeof CONTENT_STYLES;
