import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getBookDetailService } from "@import/services/bookService";
import { TBook } from "@import/types/book.types";
import { TypeAPIResponse } from "@import/types/response.types";

export const useGetBookDetail = (
  id: string,
  options?: UseQueryOptions<TypeAPIResponse<TBook, {}>>,
) => {
  return useQuery({
    queryKey: ["book-detail", id],
    queryFn: () => getBookDetailService(id),
    ...options,
  });
};
