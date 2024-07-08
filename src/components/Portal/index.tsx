import dynamic from "next/dynamic";

const Portal = dynamic(() => import("./Portal"), {
  ssr: true,
});

export default Portal;
