import fetchAPI from "@import/services/fetchAPI";

export const getTopRated = async (type: string) =>
  await fetchAPI(`/${type}/top_rated`, "GET", {
    page: 1,
  });

export const getTopRatedOfTheWeeks = async (type: string) =>
  await fetchAPI(`/${type}/popular`, "GET", {
    page: 1,
  });
