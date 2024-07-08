import styled from "styled-components";

import { zoomOutByScale } from "../styles/animate";

const StudioCardStyles = styled.article`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  height: 120px;
  .studio-card {
    &--img {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
      }
    }
    &--video {
      width: 100%;
      height: 100%;
      display: block;
      transform: scale(1.2);
      border-radius: inherit;
      animation: ${zoomOutByScale} 300ms ease-in-out;
      transform-origin: center center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      video {
        width: inherit;
        height: inherit;
        border-radius: inherit;
      }
    }
  }
`;

export default StudioCardStyles;
