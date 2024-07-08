import { Metadata, ResolvingMetadata } from "next";

import { getDetailService } from "@import/services/detail-service";

import SeriesElement from "./SeriesElement";

type RouteProps = {
  params: { id: string };
};

export async function generateMetadata(
  props: RouteProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data }: any = await getDetailService("tv", props?.params?.id);
  const previousImage = (await parent).openGraph?.images || [];
  return {
    title: data?.name,
    description: data?.overview,
    openGraph: {
      images: [`https://image.tmdb.org/t/p/original${data?.backdrop_path}`, ...previousImage],
    },
  };
}
export default async function SeriesDetailPage({ params }: RouteProps) {
  const result: any = await getDetailService("tv", String(params?.id));

  return <SeriesElement defaultData={result} id={params?.id} />;
}
