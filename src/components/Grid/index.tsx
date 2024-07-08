import dynamic from "next/dynamic";

import { GridProps } from "./Grid";

const Grid = dynamic(() => import("./Grid"), {
  ssr: true,
});

export const GridCol = dynamic(() => import("./GridRow"), {
  ssr: true,
});

export default Grid as React.FC<GridProps> & { Col: typeof GridCol };
