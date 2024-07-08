import { Metadata } from "next";

import WatchListElement from "./WatchListElement";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Watch List",
    description: "Movies, shows and more",
  };
}

export default async function ExplorePage() {
  return <WatchListElement />;
}
