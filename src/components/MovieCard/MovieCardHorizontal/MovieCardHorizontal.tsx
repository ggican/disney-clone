/* eslint-disable @next/next/no-img-element */
import { CaretRightOutlined, CheckOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import Link from "next/link";

import MovieCardHorizontalStyles from "./MovieCard.styles";
import Button from "../../Button";
import Images from "../../Images";
import { IMovieCardProps } from "../MovieCard.types";

const MovieCardHorizontal: React.FC<IMovieCardProps> = (props) => {
  const {
    title,
    id,
    backdrop_path,
    overview,
    original_language,
    poster_path,
    adult,
    original_name,
    name,
    first_air_date,
    release_date,
    forHover,
    height,
    type,
    status,
    onWishList,
  } = props;

  const onGetYearOfCard = (): string => {
    const getYear = first_air_date || release_date;
    let result: string = "";
    if (getYear) {
      result = String(moment(getYear).format("YYYY"));
    }
    return result;
  };

  const handleOnWishList = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    onWishList &&
      onWishList({
        title,
        id,
        backdrop_path,
        overview,
        original_language,
        original_name,
        name,
        adult,
        first_air_date,
        release_date,
        poster_path,
        type,
        status: !status,
      });
  };
  return (
    <MovieCardHorizontalStyles height={height} forHover={forHover}>
      <Link href={`/${type}/${id}`}>
        <div className="movie-card--horizontal">
          <div className="movie-card--horizontal-img">
            <Images src={backdrop_path} alt={`${title}-horizontal`} />
          </div>
          <div className="movie-card--horizontal-top">
            <div className="movie-card--horizontal-button">
              <Button color="primary" block>
                <CaretRightOutlined style={{ fontSize: 18 }} /> Watch Now Watch Now
              </Button>
              <Button onClick={handleOnWishList} color="secondary" block>
                {status ? (
                  <CheckOutlined style={{ fontSize: "12px", color: "#fff" }} />
                ) : (
                  <PlusOutlined style={{ fontSize: "12px", color: "#fff" }} />
                )}
              </Button>
            </div>
            <h2>{original_name || name}</h2>
            <div className="movie-card--horizontal-content">
              <span>{onGetYearOfCard()}</span>
              <span>{type === "movies" ? "1h 32m" : "3 Season"}</span>
              {original_language && <span>{original_language?.toUpperCase()}</span>}
              {adult ? <span>17+</span> : ""}
            </div>
            <div className="movie-card--horizontal-desc">
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </Link>
    </MovieCardHorizontalStyles>
  );
};

export default MovieCardHorizontal;
