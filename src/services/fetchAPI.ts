import { TErrorResponse, TypeAPIResponse } from "@import/types/response.types";

const errorResponse = (e: unknown): TErrorResponse => {
  if (e instanceof Error) {
    return {
      code: "RUNTIME_ERROR",
      message: e.message,
      data: null,
    };
  } else {
    return {
      code: "UNKNOWN_ERROR",
      message: "Oops, something went wrong!",
      data: null,
    };
  }
};

const fetchAPI = async <T>(
  url: string,
  method: string,
  params?: any,
): Promise<TypeAPIResponse<T, undefined>> => {
  try {
    let currentUrl: string = `${process.env.NEXT_PUBLIC_BASE_API}${url}`;
    if (params && Object.keys(params).length) {
      currentUrl = `${process.env.NEXT_PUBLIC_BASE_API}${url}?${new URLSearchParams(params).toString()}`;
    }

    const response = await fetch(currentUrl, {
      method: method,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // const json = (await response.json()) as T;
    return {
      data: await response.json(),
    } as TypeAPIResponse<T, undefined>;
  } catch (e) {
    return errorResponse(e);
  }
};

export default fetchAPI;
