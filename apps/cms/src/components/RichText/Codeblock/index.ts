import { withLargeBody } from "./plugins";
import { Element } from "./Element";
import { Button } from "./Button";

export const CodeBlock =  {
  name: "large-body",
  Button,
  Element,
  plugins: [withLargeBody],
};
