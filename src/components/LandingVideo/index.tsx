import dynamic from "next/dynamic";

const LandingVideo = dynamic(() => import("./LandingVideo"), {
  ssr: true,
});

export default LandingVideo;
