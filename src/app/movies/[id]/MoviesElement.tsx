"use client";

import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";

import Button from "@import/components/Button";
import { useLandingPageContext } from "@import/providers/LandingPageProviders";
import { getDetailService } from "@import/services/detail-service";
import { IGenres } from "@import/types/general.types";

import SeriesElementStyles from "./MoviesElement.styles";

export default function MovieElement({ defaultData, id }: any) {
  const { onWishList, onGetDataById } = useLandingPageContext();

  const { data }: any = useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => getDetailService("tv", String(id)),
    initialData: defaultData,
    staleTime: 5 * 1000,
  });

  const isWishList = onGetDataById(data?.data?.id);

  const onGetYearOfCard = (date: string): string => {
    const getYear = date || date;
    let result: string = "";
    if (getYear) {
      result = String(moment(getYear).format("YYYY"));
    }
    return result;
  };

  const handleOnWishList = () => {
    const {
      title,
      id,
      backdrop_path,
      overview,
      original_language,
      adult,
      first_air_date,
      release_date,
      poster_path,
    } = data?.data;
    onWishList({
      title,
      id,
      backdrop_path,
      overview,
      original_language,
      adult,
      first_air_date,
      release_date,
      poster_path,
      type: "movies",
      status: !isWishList,
    });
  };

  return (
    <>
      <SeriesElementStyles>
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE}${data?.data?.backdrop_path})`,
          }}
          className="parallax"
        ></div>
        <div className="main">
          <div className="container">
            <div className="content-detail">
              <div className="content-detail--top">
                <h1>{data?.data?.original_title}</h1>
              </div>
              <div className="content-detail--badge">
                <span>{onGetYearOfCard(data?.data?.release_date)}</span>
                <span>{`${data?.data?.runtime}m`}</span>
                <span>{data?.data?.spoken_languages?.length} Languages</span>
                {data?.data?.adult ? <span>17+</span> : ""}
              </div>
              <div className="content-detail--overview">
                <p>{data?.data?.overview}</p>
              </div>
              <div className="content-detail--genres">
                {data?.data?.genres.map((item: IGenres, key: number) => {
                  return <span key={key}>{item?.name}</span>;
                })}
              </div>
              <div className="content-detail--button">
                <div className="left">
                  <Button color="secondary" block>
                    Watch From Now
                  </Button>
                </div>
                <div className="right">
                  <Button onClick={handleOnWishList} color="secondary" block>
                    {isWishList ? (
                      <CheckOutlined style={{ fontSize: "12px", color: "#fff" }} />
                    ) : (
                      <PlusOutlined style={{ fontSize: "12px", color: "#fff" }} />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SeriesElementStyles>
    </>
  );
}
