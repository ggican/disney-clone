import { delay, http, HttpResponse } from "msw";

import { TBook } from "@import/types/book.types";

import { BookListMock } from "./data/book";
import { TVListMock } from "./data/tv-list-mock";
import { MultiListMock } from "./data/multi-list-mock";

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
  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/discover/tv`, (req) => {
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
  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/search/multi`, async (req) => {
    // const { id } = req.params;
    // const resultBook = TVListMock;
    // let statusCode = 404;
    // if (resultBook && resultBook?.id) {
    //   statusCode = 200;
    // }
    await delay();
    return HttpResponse.json(MultiListMock, {
      status: 200,
    });
  }),
];
