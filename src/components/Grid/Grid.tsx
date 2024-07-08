import React from "react";

import GridStyle from "./Grid.styles";
import GridCol from "./GridRow";

export interface GridProps {
  children: React.ReactNode;
  align?: "stretch" | "normal" | "center" | "initial" | "baseline" | "inherit";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "inherit"
    | "initial";
  className?: string;
  flexWrap?: string;
  marginBottom?: boolean;
}

const Grid = ({
  children,
  align = "normal",
  justify = "flex-start",
  flexWrap = "wrap",
  className = "",
  marginBottom = false,
}: GridProps) => {
  return (
    <GridStyle
      marginbottom={marginBottom?.toString()}
      className={className}
      align={align}
      justify={justify}
    >
      {children}
    </GridStyle>
  );
};

Grid.Col = GridCol;
export default Grid as React.FC<GridProps> & { Col: typeof GridCol };
