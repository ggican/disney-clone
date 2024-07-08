import fetchAPI from "@import/services/fetchAPI";

export const getDetailService = async (type: string, id: string) =>
  await fetchAPI(`/${type}/${id}`, "GET", {
    language: "en-US",
  });

export const getDetailSeasonService = async (seasonNumber: number, id: string) =>
  await fetchAPI(`/tv/${id}/season/${seasonNumber}`, "GET", {
    language: "en-US",
  });
