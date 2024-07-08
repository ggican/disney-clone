"use client";

import Image from "next/image";
import { useState } from "react";

import { TImagesProps } from "./Images.Types";

const Images = ({ alt, src, style }: TImagesProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      alt={alt || "original-data"}
      blurDataURL="/no-image.png"
      onError={() => setCurrentSrc("/no-image.png")}
      src={currentSrc}
      fill
      style={style}
    ></Image>
  );
};

export default Images;
