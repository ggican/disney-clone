import { useEffect, useRef, useState } from "react";

import { ValueWishList } from "@import/providers/LandingPageProviders";

import MovieCardStyles from "./MovieCard.styles";
import type { IMovieCardProps } from "./MovieCard.types";
import MovieCardHorizontal from "./MovieCardHorizontal";
import MovieCardVertical from "./MovieCardVertical";
import Portal from "../Portal";

function getPercentage(firstNumber: number, lastNumber: number) {
  return ((lastNumber - firstNumber) / firstNumber) * 100;
}

const MovieCard = (props: IMovieCardProps) => {
  const [coords, setCoords] = useState({
    height: 0,
  });
  const [isHover, setHover] = useState(false);
  const refMovieCard = useRef();
  const handleOnMouseEnter = (e: any) => {
    const element = e.target.getBoundingClientRect();
    const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
    const result = getPercentage(element.right + element.width, viewPortWidth);
    const OVER_SIZE = 150;
    let coordinate: any = {
      width: element.width + OVER_SIZE,
      height: element.height + OVER_SIZE,
      position: "fixed",
      zIndex: 99,
      left: element.left - OVER_SIZE / 2,
      top: element.top - OVER_SIZE / 2,
      borderRadius: 8,
    };

    if (element?.left < 140) {
      coordinate["left"] = element?.left;
      delete coordinate["right"];
      delete coordinate["transform"];
    }

    if (result < 3.5) {
      coordinate["right"] = 30;
      delete coordinate["left"];
      delete coordinate["transform"];
    }
    setCoords(coordinate);
    setHover(true);
  };
  const handleOnMouseLeave = (e: any) => {
    setCoords({ height: 0 });
    setHover(false);
  };

  const onWishList = (value: ValueWishList) => {
    setCoords({ height: 0 });
    setHover(false);
    props.onWishList(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleOnMouseLeave);
    };
  }, []);

  return (
    <MovieCardStyles
      ref={refMovieCard}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <MovieCardVertical {...props}>
        {isHover && (
          <Portal>
            <div style={coords}>
              <MovieCardHorizontal
                height={coords?.height}
                forHover
                {...props}
                onWishList={onWishList}
              />
            </div>
          </Portal>
        )}
      </MovieCardVertical>
    </MovieCardStyles>
  );
};

export default MovieCard;
