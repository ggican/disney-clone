"use client";

import React from "react";

import Grid, { GridCol } from "@import/components/Grid";
import MovieCard from "@import/components/MovieCard";
import { useLandingPageContext } from "@import/providers/LandingPageProviders";

import WatchLisStyles from "./WatchList.styles";

export default function WatchListElement() {
  const { localWhishList } = useLandingPageContext();
  return (
    <div className="container">
      <WatchLisStyles>
        <div className="section--title">
          <h2>Watchlist</h2>
        </div>
        {localWhishList && localWhishList.length > 0 && (
          <>
            <Grid marginBottom={true}>
              {localWhishList?.map((item: any, key: number) => {
                const result = {
                  ...item,
                  backdrop_path: `https://image.tmdb.org/t/p/original${item?.backdrop_path}`,
                  poster_path: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
                };
                return (
                  <GridCol key={key} lg={2} sm={2} xs={2} md={2}>
                    <MovieCard type="movies" key={key} {...result}></MovieCard>
                  </GridCol>
                );
              })}
            </Grid>
          </>
        )}
      </WatchLisStyles>
    </div>
  );
}
