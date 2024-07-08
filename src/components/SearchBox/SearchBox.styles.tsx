import styled from "styled-components";

const SearchBoxStyles = styled.div`
  width: 100%;
  display: block;
  background-color: #262833;
  border-radius: 8px;
  position: relative;
  .search-box {
    &--icon {
      position: absolute;
      z-index: 9;
      top: 2px;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      padding: 0;
      outline: none;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 24px;
      &.left {
        left: 20px;
      }
      &.right {
        right: 20px;
      }
    }
    &--input {
      input {
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        border-radius: initial;
        padding: 20px 70px 20px 70px;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        &:-webkit-autofill {
          background-color: #262833;
        }

        &:-webkit-autofill:focus {
          background-color: #262833;
        }
      }
    }
  }
`;

export default SearchBoxStyles;
