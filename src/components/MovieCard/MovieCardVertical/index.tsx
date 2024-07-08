import dynamic from "next/dynamic";

const MovieCardVertical = dynamic(() => import("./MovieCardVertical"), {
  ssr: true,
});

export default MovieCardVertical;
