import { http, HttpResponse } from "msw";

import { TBook } from "@import/types/book.types";

import { BookListMock } from "./data/book";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/books`, () => {
    return HttpResponse.json<TBook[]>(BookListMock);
  }),

  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/books/:id`, (req) => {
    const { id } = req.params;
    const resultBook = BookListMock.find((item: TBook) => item?.id === Number(id));
    let statusCode = 404;
    if (resultBook && resultBook?.id) {
      statusCode = 200;
    }
    return HttpResponse.json<TBook>(resultBook, {
      status: statusCode,
    });
  }),
];
