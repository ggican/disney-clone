import dynamic from "next/dynamic";

const Section = dynamic(() => import("./Sections"), {
  ssr: true,
});

export default Section;
