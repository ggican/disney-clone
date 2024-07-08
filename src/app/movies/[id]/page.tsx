import { Metadata, ResolvingMetadata } from "next";

import { getDetailService } from "@import/services/detail-service";

import MoviesElement from "./MoviesElement";

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
export default async function MovieDetailPage({ params }: RouteProps) {
  const result: any = await getDetailService("movie", String(params?.id));

  return <MoviesElement defaultData={result} id={params?.id} />;
}
