import fetchAPI from "@import/services/fetchAPI";

export const getExploreService = async (query: string) =>
  await fetchAPI(`/search/multi`, "GET", {
    query: query,
    include_adult: true,
    include_video: true,
    language: "en-US",
    page: 1,
  });
