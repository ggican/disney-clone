import styled from "styled-components";

const MovieCardVerticalStyles = styled.div`
  width: 100%;
  height: 250px;
  display: block;
  background-color: #2a2a2a;
  color: #ffffffd6;
  border-radius: 8px;
  .movie-card {
    display: flex;
    width: inherit;
    height: inherit;
    &--vertical {
      display: flex;
      width: inherit;
      height: inherit;
      &-img {
        display: flex;
        width: inherit;
        height: inherit;
        border-radius: inherit;

        img {
          display: flex;
          width: inherit;
          height: inherit;
          box-sizing: border-box;
          object-fit: cover;
          border-radius: inherit;
        }
      }
    }
  }
`;

export default MovieCardVerticalStyles;
