"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import Grid, { GridCol } from "@import/components/Grid";
import MovieCard from "@import/components/MovieCard";
import SearchBox from "@import/components/SearchBox";
import debounce from "@import/libs/utils/debounce";
import { ValueWishList, useLandingPageContext } from "@import/providers/LandingPageProviders";
import { getExploreService } from "@import/services/explore-service";

import ExploreStyles from "./Explore.styles";

export const DEBOUNCE_DEFAULT_DELAY = 200;

export default function ExplorePage() {
  const { onWishList, onCheckWatchList } = useLandingPageContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchValue, setSearchValue] = useState<string>(query);
  const [splitData, setSplitData] = useState({
    movies: [],
    series: [],
  });
  const { data, isLoading }: any = useQuery({
    queryKey: ["hydrate-users", searchValue],
    queryFn: () => getExploreService(searchValue),
  });

  const handleOnSplitData = () => {
    setSplitData({
      movies: data?.data?.results.filter((item: any) => item?.media_type === "movie"),
      series: data?.data?.results.filter((item: any) => item?.media_type === "tv"),
    });
  };

  const handleOnSearch = debounce((value: string) => {
    router.push(`/explore?query=${value}`);
    setSearchValue(value);
  }, 500);

  useEffect(() => {
    if (!isLoading) {
      handleOnSplitData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleOnWishList = (values: ValueWishList) => {
    onWishList(values);
  };

  return (
    <div className="container">
      <ExploreStyles>
        <SearchBox
          onSearch={handleOnSearch}
          value={searchValue}
          placeholder="Movies, shows and more"
          name="search"
        />
        {splitData?.movies && splitData?.movies.length > 0 && (
          <>
            <div className="section--title">
              <h2>Movies Results</h2>
            </div>
            <Grid marginBottom={true}>
              {onCheckWatchList(splitData?.movies)?.map((item: any, key: number) => {
                const result = {
                  ...item,
                  backdrop_path: `https://image.tmdb.org/t/p/original${item?.backdrop_path}`,
                  poster_path: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
                };
                return (
                  <GridCol key={key} lg={2} sm={2} xs={2} md={2}>
                    <MovieCard
                      key={key}
                      {...result}
                      type="movies"
                      onWishList={handleOnWishList}
                    ></MovieCard>
                  </GridCol>
                );
              })}
            </Grid>
          </>
        )}
        {splitData?.series && splitData?.series.length > 0 && (
          <>
            <div className="section--title">
              <h2>Series Results</h2>
            </div>
            <Grid marginBottom={true}>
              {onCheckWatchList(splitData?.series)?.map((item: any, key: number) => {
                const result = {
                  ...item,
                  backdrop_path: `https://image.tmdb.org/t/p/original${item?.backdrop_path}`,
                  poster_path: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
                };
                return (
                  <GridCol key={key} lg={2} sm={2} xs={2} md={2}>
                    <MovieCard
                      key={key}
                      {...result}
                      type="series"
                      onWishList={handleOnWishList}
                    ></MovieCard>
                  </GridCol>
                );
              })}
            </Grid>
          </>
        )}
      </ExploreStyles>
    </div>
  );
}
