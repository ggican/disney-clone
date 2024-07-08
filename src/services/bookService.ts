"use client";

import { TBook } from "@import/types/book.types";
import { TypeAPIResponse } from "@import/types/response.types";

import fetchAPI from "./fetchAPI";

export const getBookListService = (): Promise<TypeAPIResponse<TBook[], []>> => {
  return fetchAPI<TBook[]>("/books");
};

export const getBookDetailService = (id: string): Promise<TypeAPIResponse<TBook>> => {
  return fetchAPI<TBook>(`/books/${id}`);
};
