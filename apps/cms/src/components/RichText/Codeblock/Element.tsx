import React from "react";

import "./Element.scss";

type Props = {
  attributes: any;
  children?: React.ReactNode;
  element: any;
}

export const Element: React.FC<Props> = ({ attributes, children }) => (
  <span {...attributes}>
    <div className="rich-text-large-body">{children}</div>
  </span>
);
