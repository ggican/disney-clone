import MovieCardVerticalStyles from "./MovieCardVertical.styles";
import Images from "../../Images";
import { IMovieCardProps } from "../MovieCard.types";

const MovieCardVertical = (props: IMovieCardProps) => {
  const { poster_path, title, children } = props;

  return (
    <MovieCardVerticalStyles>
      <div className="movie-card--vertical-img">
        <Images src={poster_path} alt={title}></Images>
      </div>
      {children && children}
    </MovieCardVerticalStyles>
  );
};

export default MovieCardVertical;
