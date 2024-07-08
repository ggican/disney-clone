"use client";

import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import React from "react";

import { getDetailSeasonService } from "@import/services/detail-service";

import SeriesElementStyles from "./SeriesElement.styles";

export default function SeriesSeason({ seasonNumber, id }: any) {
  const { data }: any = useQuery({
    queryKey: ["tv-series-season", seasonNumber, id],
    queryFn: () => getDetailSeasonService(seasonNumber, String(id)),
  });

  return (
    <>
      <SeriesElementStyles>
        <div className="episode-list">
          {data?.data?.episodes?.map((item: any, key: number) => {
            return (
              <div className="episode-list-row" key={key}>
                <div className="episode-list-col">
                  <div className="episode-list-image">
                    <Image
                      height={120}
                      width={200}
                      objectFit="cover"
                      alt={item?.name || item?.original_name || "movie-data"}
                      src={`${process.env.NEXT_PUBLIC_IMAGE}${item?.still_path}`}
                    />
                  </div>
                </div>
                <div className="episode-list-col right">
                  <h4>{item?.name || item?.original_name}</h4>
                  <div className="badge">
                    <span>{`${item?.season_number ? `S${item?.season_number}` : ""} E${item?.episode_number}`}</span>
                    <span>{moment(item?.air_date).format("DD MMM YYYY")}</span>
                    <span>{item?.runtime} m</span>
                  </div>

                  <p>{item?.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SeriesElementStyles>
    </>
  );
}
