import React from "react";

import ButtonStyle from "./Button.styles";
import { IButtonProps } from "./Button.types";

const Button: React.FC<IButtonProps> = ({ children, block, color, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} type="button" color={color} $block={block}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
