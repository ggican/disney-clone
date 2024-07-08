import dynamic from "next/dynamic";

const StudioCard = dynamic(() => import("./StudioCard"), {
  ssr: true,
});

export default StudioCard;
