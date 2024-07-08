import dynamic from "next/dynamic";

const MovieCardHorizontal = dynamic(() => import("./MovieCardHorizontal"), {
  ssr: true,
});

export default MovieCardHorizontal;
