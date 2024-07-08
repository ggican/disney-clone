/* eslint no-use-before-define: 0 */
"use client";

import React, { FC, createElement } from "react";
import "./Text.scss";

interface TextProps {
  type: keyof typeof elements; // Allow only keys of elements object as type
  font?: string | number;
  size?: string | number;
  ellipsis?: string | number;
  align?: string;
  color?: string;
  children?: React.ReactNode;
}

const elements: Record<string, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
};

const Text: FC<TextProps> = ({ type, children, font = 400, size, ellipsis, align, color }) => {
  const ElementType = elements[type] || "h1"; // Default to 'h1' if type is not found

  return createElement(
    ElementType,
    {
      className: `text ${font ? "font-" + font : ""} ${
        size ? "font-size-" + `${size}` : ""
      } ${ellipsis ? "text-ellipsis-" + `${ellipsis}` : ""} ${
        align ? "text-align-" + `${align}` : ""
      } ${color ? "text-" + `${color}` : ""}`,
    },
    children,
  );
};

export default Text;
