import { Metadata } from "next";

import { getDiscover } from "@import/services/discover-service";
import { getTopRated, getTopRatedOfTheWeeks } from "@import/services/top-rated";

import HomeElement from "./home/HomeElement";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Disney Plus",
    description: "Movies, shows and more",
  };
}

export default async function HomePage() {
  const result: any = await Promise.all([
    getDiscover("tv"),
    getDiscover("movie"),
    getTopRated("tv"),
    getTopRated("movie"),
    getTopRatedOfTheWeeks("tv"),
    getTopRatedOfTheWeeks("movie"),
  ]).then(
    ([discoverTv, discoverMovie, topRatedTv, topRatedMove, topRatedWeekTv, topRatedWeekMovie]) => ({
      discoverTv,
      discoverMovie,
      topRatedTv,
      topRatedMove,
      topRatedWeekTv,
      topRatedWeekMovie,
    }),
  );

  return <HomeElement defaultData={result} />;
}
