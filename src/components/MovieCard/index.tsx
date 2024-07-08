import dynamic from "next/dynamic";

const MovieCard = dynamic(() => import("./MovieCard"), {
  ssr: true,
});

export default MovieCard;
