import styled from "styled-components";

const SectionsStyles = styled.div`
  width: 100%;
  display: block;
  margin-top: 30px;
  .section {
    &--top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    &--link {
      opacity: 0.6;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 1px;
      &:hover {
        opacity: 1;
        transition: all ease-in-out 300ms;
      }
    }
    &--list {
      width: 100%;
      height: 242px;
      display: block;
    }
  }
  .swiper-slide {
    background-color: transparent;
  }
`;

export default SectionsStyles;
