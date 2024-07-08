/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

import StudioCardStyles from "./StudioCard.styles";
import { IStudioCardProps } from "./StudioCard.types";

const StudioCard = (props: IStudioCardProps) => {
  const { video, image } = props;
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <StudioCardStyles>
      <div
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        className="studio-card--img"
      >
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="studio-card"
          src={image}
        ></Image>
        {isShow && (
          <div className="studio-card--video">
            <video autoPlay muted loop playsInline preload="auto" src={video} />
          </div>
        )}
      </div>
    </StudioCardStyles>
  );
};

export default StudioCard;
