import styled, { css } from "styled-components";

const createCSS = (type: any, column: any) => {
  let styles = "";
  for (let i = 1; i <= column; i += 1) {
    styles += `
         .col-${type}-${i} {
            box-sizing: border-box;
            min-height: 1px;
            position: relative;
            padding-left: 10px;
            padding-right: 10px;
            flex: 0 0 ${(100 / column) * i}%;
            max-width: ${(100 / column) * i}%;
            margin-left: 0%;
            margin-bottom:12px;
            right: auto;
            left: auto;
         }
       `;
  }

  return css`
    ${styles}
  `;
};

const COLUMN_COUNT = 14;
const GridStyle = styled.div<any>`
  align-items: ${(props) => props.align || "normal"};
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: ${(props) => `${props.flexWrap || "wrap"}`};
  justify-content: ${(props) => `${props.justify || "flex-start"}`};
  margin-left: -10px;
  margin-right: -10px;
  ${createCSS("lg", COLUMN_COUNT)};
  @media (max-width: 1024px) {
    ${createCSS("md", COLUMN_COUNT)};
  }
  @media (max-width: 760px) {
    ${createCSS("sm", COLUMN_COUNT)};
  }
  @media (max-width: 550px) {
    ${createCSS("xs", COLUMN_COUNT)};
  }
  ${({ marginbottom }) =>
    marginbottom === "true" &&
    `
         margin-bottom:15px;
  `}
`;
export default GridStyle;
