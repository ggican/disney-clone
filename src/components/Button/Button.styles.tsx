import styled from "styled-components";

const ButtonStyle = styled.button<{ $block?: boolean }>`
  background: ${(props) =>
    props.color
      ? props.theme?.button[props.color].background
      : props.theme?.button.primary.background};
  color: ${(props) =>
    props.color ? props.theme.button[props.color].color : props.theme?.button.primary.color};
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  display: ${(props) => (props.$block ? "block" : "inline-block")};
  width: ${(props) => (props.$block ? "100%" : "auto")};
  font-size: 14px;
  font-weight: 400;
  outline: none;
  line-height: 1;
  padding: 14px;
  position: relative;
  text-align: center;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  transform: unset;
  transition: all 300ms ease-in-out;
  font-weight: bold;
  font-size: 14px;

  ${(props) => {
    if (props.color === "secondary")
      return `
            
            &:hover{
              opacity:1;
              transition: all 300ms ease-in-out;
              background:hsla(0,0%,100%,.3);
            }
        `;
  }}
`;

export default ButtonStyle;
