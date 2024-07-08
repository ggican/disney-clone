import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { ValueWishList } from "@import/providers/LandingPageProviders";

import SectionsStyles from "./Sections.styles";
import { ISectionsProps } from "./Sections.type";
import MovieCard from "../MovieCard";
import { IMovieCardProps } from "../MovieCard/MovieCard.types";

const Sections = ({ title, viewUrl, data, type, onWishList }: ISectionsProps) => {
  const handleOnWishList = (value: ValueWishList) => {
    onWishList(value);
  };
  return (
    <SectionsStyles>
      <div className="section--top">
        <h2 className="section--title">{title}</h2>
        <Link className="section--link" href={viewUrl}>
          View All <RightOutlined />
        </Link>
      </div>

      <div className="section--list">
        <Swiper slidesPerView={7} spaceBetween={10} pagination={false} className={title}>
          {data?.map((item: IMovieCardProps, key: number) => {
            const result = {
              ...item,
              backdrop_path: `${process.env.NEXT_PUBLIC_IMAGE}${item?.backdrop_path}`,
              poster_path: `${process.env.NEXT_PUBLIC_IMAGE}${item?.poster_path}`,
            };
            return (
              <SwiperSlide key={key}>
                <MovieCard type={type} {...result} onWishList={handleOnWishList}></MovieCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </SectionsStyles>
  );
};

export default Sections;
