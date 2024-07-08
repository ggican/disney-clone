import styled from "styled-components";

const MoviesElementStyles = styled.div`
  width: 100%;
  display: block;
  .parallax {
    background-image: url("https://www.w3schools.com/howto/img_parallax.jpg");
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

  .content-detail {
    margin-top: -800px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    z-index: 30;
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
        /* margin-right: 20px; */
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
    }
  }
  .season-content {
    display: block;
    width: 100%;

    .season-list {
      display: block;
      margin-bottom: 20px;
      width: 100%;
      li {
        display: inline-block;
        margin-right: 20px;
      }
      button {
        cursor: pointer;
        display: block;
        opacity: 0.6;
        font-size: 16px;
        font-weight: 700;
        background-color: transparent;
        border: none;
        outline: none;
        color: #ffffffd9;
        &.active {
          color: #fff;
          opacity: 1;
        }
      }
    }
  }
  .episode-list {
    width: 60%;
    display: block;
    &-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 30px;
    }
    &-image {
      img {
        border-radius: 8px;
      }
    }
    &-col {
      display: inline-flex;
      width: auto;
      margin-bottom: 30px;
      flex-direction: column;
      h4 {
        margin-bottom: 10px;
        display: block;
      }
      p {
        color: #ffffffd9;
        opacity: 0.6;
        font-size: 14px;
      }
      .badge {
        display: block;
        width: 100%;
        margin-bottom: 16px;
        span {
          display: inline-flex;
          font-size: 14px;
          font-weight: bold;
          position: relative;
          font-size: 15px;
          + span {
            &:before {
              display: inline-block;
              padding-right: 0.5rem;
              padding-left: 0.5rem;
              color: #fff;
              content: "·";
            }
          }
        }
      }
      &.right {
        width: calc(100% - 220px);
      }
    }
  }
`;

export default MoviesElementStyles;
