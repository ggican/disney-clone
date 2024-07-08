import styled from "styled-components";

import { ILandingVideoProps } from "./LandingVideo.types";

const LandingVideoStyles = styled.div<ILandingVideoProps>`
  width: 100%;
  display: block;
  height: ${(p) => p.height || "100vh"};
  .parallax {
    background-image: url("https://image.tmdb.org/t/p/original/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg");
    min-height: 100vh;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(to right top, #101115, rgba(16, 17, 21, 0));
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
  }
  .video {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: fill;
    position: relative;
  }
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: fill;
    position: relative;
    &:before {
      content: "";
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(to right top, #101115, rgba(16, 17, 21, 0));
    }
    &:after {
      content: "";
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(to right top, #101115, rgba(16, 17, 21, 0));
    }
  }

  .content-detail {
    margin-top: -650px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    z-index: 99;
    padding-top: 120px;
    width: 420px;
    &--top {
      width: 100%;
      display: block;
      h1 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
        letter-spacing: 3px;
      }
    }
    &--badge {
      display: flex;
      width: 100%;
      margin-bottom: 8px;

      span {
        display: inline-flex;
        font-size: 16px;
        font-weight: bold;
        position: relative;
        margin-right: 20px;
        + span {
          &:before {
            position: absolute;
            display: inline-block;
            background-color: #fff;
            content: "";
            height: 6px;
            width: 6px;
            left: -13px;
            border-radius: 50%;
            top: 8px;
          }
        }
      }
    }
    &--genres {
      display: flex;
      width: 100%;
      margin-top: 12px;

      span {
        display: inline-flex;
        font-size: 14px;
        font-weight: bold;
        position: relative;
        + span {
          &:before {
            display: inline-block;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
            color: #fff;
            content: "|";
          }
        }
      }
    }
    &--overview {
      width: 100%;
      display: block;
      p {
        text-align: left;
      }
    }
    &--button {
      margin-top: 20px;
      display: grid;
      grid-template-columns: auto 40px;
      grid-template-rows: auto;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      margin-bottom: 8px;
      width: 100%;
      .left {
        button {
          margin-bottom: 20px;
        }
      }
      .right {
        button {
          margin-bottom: 20px;
          height: 48.25px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .landing-studio-card-grid {
    margin-top: 40px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px 10px;
  }
`;

export default LandingVideoStyles;
