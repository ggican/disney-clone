import styled, { keyframes } from "styled-components";

import { showToRight } from "../styles/animate";

const SidebarStyles = styled.aside<{ $isNavHover: boolean }>`
  align-items: center;
  display: flex;
  height: 100vh;
  min-width: 102px;
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .aside-shadow {
    position: fixed;
    z-index: 31;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    background-color: transparent;
    background-image: linear-gradient(to right, #101115, rgba(16, 17, 21, 0));
    transition: all ease-in 100ms;
  }
  .disney-logo {
    position: absolute;
    z-index: 60;
    top: 0;
    left: 20px;
    padding: 20px 0;
    .disney-logo--img {
      width: 51px;
      height: 51px;
      display: block;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
  .profile {
    position: relative;
  }
  nav {
    z-index: 60;
    display: block;
    width: 100%;
    ul {
      width: 100%;
      display: block;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        display: block;
        padding: 0;
        margin: 0;

        a {
          text-decoration: none;
          padding: 17px 36px;
          width: 100%;
          display: flex;
          transform: scale(1);
          transform-origin: left;
          font-size: 24px;
          transition: all 300ms ease-in-out;
          svg,
          span {
            color: rgb(111 111 111 / 50%);
            fill: rgb(111 111 111 / 50%);
            transition: all 300ms ease-in-out;
          }
          &:hover {
            transform: scale(1.1);
            transform-origin: left;
            transition: all 300ms ease-in-out;
            svg,
            span {
              color: #fff;
              fill: #fff;
              transition: all 300ms ease-in-out;
            }
            .nav--title {
            }
          }
        }
        &.active {
          a {
            svg,
            span {
              color: #fff;
              fill: #fff;
              transition: all 300ms ease-in-out;
            }
          }
        }
      }
    }

    .nav--title {
      color: rgb(111 111 111 / 50%);
      opacity: 0;
      display: none;
      margin-left: 10px;
      font-size: 14px;
      font-weight: 600;
      visibility: hidden;
      opacity: 0;
      transform: translateX(-10px);
    }

    &:hover {
      .nav--title {
        display: inline-block;
        visibility: visible;
        opacity: 1;
        transform: translateX(5px);
        animation: ${showToRight} 300ms linear;
      }
    }
  }
`;

export default SidebarStyles;
