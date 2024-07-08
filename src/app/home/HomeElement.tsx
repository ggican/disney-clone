"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import LandingVideo from "@import/components/LandingVideo";
import Sections from "@import/components/Sections";
import { useLandingPageContext } from "@import/providers/LandingPageProviders";
import { getDiscover } from "@import/services/discover-service";
import { getTopRated, getTopRatedOfTheWeeks } from "@import/services/top-rated";

import HomeElementStyles from "./HomeElement.styles";

export default function HomeElement({ defaultData }: any) {
  const { onWishList, localWhishList, onCheckWatchList } = useLandingPageContext();
  const { data }: any = useQuery({
    queryKey: ["top-rated"],
    queryFn: () =>
      Promise.all([
        getDiscover("tv"),
        getDiscover("movie"),
        getTopRated("tv"),
        getTopRated("movie"),
        getTopRatedOfTheWeeks("tv"),
        getTopRatedOfTheWeeks("movie"),
      ]).then(
        ([
          discoverTv,
          discoverMovie,
          topRatedTv,
          topRatedMovie,
          topRatedWeekTv,
          topRatedWeekMovie,
        ]) => ({
          discoverTv,
          discoverMovie,
          topRatedTv,
          topRatedMovie,
          topRatedWeekTv,
          topRatedWeekMovie,
        }),
      ),
    initialData: defaultData,
    staleTime: 5 * 1000,
  });

  const {
    discoverTv,
    discoverMovie,
    topRatedTv,
    topRatedMovie,
    topRatedWeekTv,
    topRatedWeekMovie,
  } = data;

  return (
    <HomeElementStyles>
      <LandingVideo src="/videoplayback.mp4" autoPlay muted></LandingVideo>
      <div className="main">
        <div className="container">
          {localWhishList.length > 0 && (
            <Sections
              onWishList={onWishList}
              data={localWhishList.map((item) => {
                return {
                  ...item,
                };
              })}
              title="Watch List"
              viewUrl="/watch-list"
            ></Sections>
          )}
          <Sections
            onWishList={onWishList}
            type="series"
            data={onCheckWatchList(topRatedTv?.data?.results)}
            title="Top Rated Series"
            viewUrl="/top-rated-series"
          ></Sections>
          <Sections
            onWishList={onWishList}
            type="movies"
            data={onCheckWatchList(topRatedMovie?.data?.results)}
            title="Top Rated Movies"
            viewUrl="/top-rated-movies"
          ></Sections>
          <Sections
            onWishList={onWishList}
            type="movies"
            data={onCheckWatchList(topRatedWeekMovie?.data?.results)}
            title="Movie of the Week"
            viewUrl="/editorial/movie-of-the-week"
          ></Sections>
          <Sections
            onWishList={onWishList}
            type="series"
            data={onCheckWatchList(topRatedWeekTv?.data?.results)}
            title="Series of the Week"
            viewUrl="/editorial/series-of-the-week"
          ></Sections>{" "}
          <Sections
            onWishList={onWishList}
            type="series"
            data={onCheckWatchList(discoverTv?.data?.results)}
            title="Discover Series"
            viewUrl="/discover-series"
          ></Sections>
          <Sections
            onWishList={onWishList}
            type="movies"
            data={onCheckWatchList(discoverMovie?.data?.results)}
            title="Discover Movie"
            viewUrl="/discover-movies"
          ></Sections>
        </div>
      </div>
    </HomeElementStyles>
  );
}
