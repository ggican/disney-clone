"use client";

import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useEffect, useState } from "react";

import Button from "@import/components/Button";
import { useLandingPageContext } from "@import/providers/LandingPageProviders";
import { getDetailService } from "@import/services/detail-service";
import { IGenres, ISeasons } from "@import/types/general.types";

import SeriesElementStyles from "./SeriesElement.styles";
import SeriesSeason from "./SeriesSeasons";

export default function SeriesElement({ defaultData, id }: any) {
  const { onWishList, onGetDataById } = useLandingPageContext();
  const [displaySeasonNumber, setDisplaySeasonNumber] = useState(0);
  const { data, isLoading }: any = useQuery({
    queryKey: ["series-detail", id],
    queryFn: () => getDetailService("tv", String(id)),
    initialData: defaultData,
    staleTime: 5 * 1000,
  });

  const onGetYearOfCard = (date: string): string => {
    const getYear = date || date;
    let result: string = "";
    if (getYear) {
      result = String(moment(getYear).format("YYYY"));
    }
    return result;
  };

  const isWishList = onGetDataById(data?.data?.id);

  useEffect(() => {
    return () => {
      setDisplaySeasonNumber(0);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setDisplaySeasonNumber(data?.data?.seasons[0]?.season_number);
    }
  }, [isLoading, data?.data?.seasons]);

  const handleDisplaySeason = (value: number) => {
    setDisplaySeasonNumber(value);
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
      type: "series",
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
                <h1>{data?.data?.name}</h1>
              </div>
              <div className="content-detail--badge">
                <span>{onGetYearOfCard(data?.data?.last_air_date)}</span>
                <span>{`${data?.data?.seasons?.length} Season`}</span>
                <span>{data?.data?.languages?.length} Languages</span>
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
                  <Button color="primary" block>
                    Watch From Begining
                  </Button>
                  <Button color="secondary" block>
                    Resume
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
        <div className="main">
          <div className="container">
            <div className="season-content">
              <ul className="season-list">
                {data?.data?.seasons.map((item: ISeasons, key: number) => {
                  return (
                    <li key={key}>
                      <button
                        className={displaySeasonNumber === item?.season_number ? "active" : ""}
                        onClick={() => {
                          handleDisplaySeason(item?.season_number);
                        }}
                      >
                        {item?.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <SeriesSeason id={String(id)} seasonNumber={displaySeasonNumber}></SeriesSeason>
            </div>
          </div>
        </div>
      </SeriesElementStyles>
    </>
  );
}
