import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getBookListService } from "@import/services/bookService";
import { TBook } from "@import/types/book.types";
import { TypeAPIResponse } from "@import/types/response.types";

export const useGetBookList = (options?: UseQueryOptions<TypeAPIResponse<TBook[], []>>) => {
  return useQuery({
    queryKey: ["book-list"],
    queryFn: () => getBookListService(),
    ...options,
  });
};
