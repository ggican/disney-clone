// onLoveBook.test.js

import localForage from "@import/lib/mocks/localForage"; // Adjust import path as per your project

import { onLoveBook } from "./onLoveBook";

describe("onLoveBook function", () => {
  beforeEach(() => {
    // Clear the mock store before each test
    localForage.clear();
  });

  test("adds a book to love list", async () => {
    // Mock initial bookList and result
    const bookList = [
      {
        id: 1,
        title: "Testing",
        author: "Harper Lee",
        description:
          "A classic of modern American literature that has been celebrated for its finely crafted characters and brilliant storytelling.",
        cover: "https://m.media-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg",
        publicationDate: "1960-07-11T00:00:00.000Z",
      },
      {
        id: 2,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description:
          "The story of Jay Gatsby, a self-made millionaire, and his pursuit of the American Dream.",
        cover:
          "https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        publicationDate: "1925-04-10T00:00:00.000Z",
      },
    ];
    const result = {
      id: 1,
      title: "Testing",
      author: "Harper Lee",
      description:
        "A classic of modern American literature that has been celebrated for its finely crafted characters and brilliant storytelling.",
      cover: "https://m.media-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg",
      publicationDate: "1960-07-11T00:00:00.000Z",
    };

    // Set the initial love list in localForage
    await localForage.setItem("love", []);

    // Call onLoveBook with status=true
    const updatedLoveList = await onLoveBook({ id: 1, status: true, bookList });

    // Retrieve the updated love list from localForage
    const storedLoveList = await localForage.getItem("love");

    // Assert that the book was added to the love list
    expect(updatedLoveList).toHaveLength(1);
    expect(updatedLoveList[0]).toEqual(result);

    // Assert that localForage was updated correctly
    expect(storedLoveList).toHaveLength(0);
  });
});
