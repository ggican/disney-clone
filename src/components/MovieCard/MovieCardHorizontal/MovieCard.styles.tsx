import styled from "styled-components";

import { zoomOutByScaleSecond } from "../../styles/animate";

const MovieCardHorizontalStyles = styled.div<any>`
  display: block;
  width: 100%;
  height: 100%;
  color: #ffffffd6;
  border-radius: 8px;
  z-index: 99;
  .movie-card {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: inherit;

    &--horizontal {
      transform: scale(1);
      animation: ${zoomOutByScaleSecond} 300ms ease-in-out;
      transform-origin: center center;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background-color: #16181f;
      border-radius: inherit;
      display: grid;
      grid-auto-rows: 45% calc(100% - 45%);
      column-gap: 0;
      row-gap: 0;

      &-img {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        height: ${(props) => props.height || "100%"};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-image: linear-gradient(to right top, #0f1014, rgba(16, 17, 21, 0));
        }
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-image: linear-gradient(to right top, #101115, rgba(16, 17, 21, 0));
        }

        img {
          display: flex;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          object-fit: cover;
          border-radius: inherit;
        }
      }
      &-button {
        display: grid;
        grid-template-columns: auto 58px;
        grid-template-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        margin-bottom: 8px;
        button: {
          height: 20px;
          transform: unset;
        }
      }
      &-top {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        h2 {
          width: 100%;
          display: block;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
      &-content {
        display: flex;
        width: 100%;
        margin-bottom: 8px;

        span {
          display: inline-flex;
          font-size: 14px;
          font-weight: bold;
          position: relative;
          margin-right: 16px;
          + span {
            &:before {
              position: absolute;
              display: inline-block;
              background-color: #fff;
              content: "";
              height: 4px;
              width: 4px;
              left: -10px;
              border-radius: 50%;
              top: 6.5px;
            }
          }
        }
      }
      &-desc {
        display: flex;
        width: 100%;
        height: 100%;
        color: #8f98b2;
        border-radius: 8px;
        p {
          height: 70px;
          font-weight: 400;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;
          overflow-wrap: break-word;
          border-radius: 8px;
        }
      }
    }
  }
`;

export default MovieCardHorizontalStyles;
