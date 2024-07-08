import { keyframes } from "styled-components";

export const zoomOutByScale = keyframes`
  from {
      transform:scale(0)
    }
  to {
    transform: scale(1.2);
    }
`;

export const zoomOutByScaleSecond = keyframes`
  from {
      transform:scale(0)
    }
  to {
    transform: scale(1);
    }
`;

export const showToRight = keyframes`
  0% {
    display:inline-block;
    visibility: visible;
    transform: translateX(-10px);
  }
  10% {
    opacity: 0.4;
    visibility: visible;
    display:inline-block;
    
    transform: translateX(-5px);
  }
  50% {
    opacity: 0.8;
    visibility: visible;
    display:inline-block;
  }
  80%,100% {
    opacity:1;
    transform: translateX(5px);
    visibility: visible;
    display:inline-block;
  }
`;

export const showToZoomOut = keyframes`
  0% {
    display:inline-block;
    visibility: visible;
    transform: scale(0);
  }
  10% {
    opacity: 0.4;
    visibility: visible;
    display:inline-block;
    
    transform: scale(0.4);
  }
  50% {
    opacity: 0.8;
    visibility: visible;
    display:inline-block;
    transform: scale(0.8);
  }
  80%,100% {
    opacity:1;
    transform: translateX(5px);
    visibility: visible;
    display:inline-block;
    transform: scale(1.2);
  }
`;
