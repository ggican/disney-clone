import dynamic from "next/dynamic";

const Text = dynamic(() => import("./Text"), {
  ssr: false,
});

export default Text;
