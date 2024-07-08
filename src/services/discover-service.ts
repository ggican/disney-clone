import fetchAPI from "@import/services/fetchAPI";

export const getDiscover = async (type: string) =>
  await fetchAPI(`/discover/${type}`, "GET", {
    page: 1,
  });
