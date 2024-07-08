import dynamic from "next/dynamic";

const SearchBox = dynamic(() => import("./SearchBox"), {
  ssr: true,
});

export default SearchBox;
