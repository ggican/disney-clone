import localForage from "@import/lib/storage/localStorage";
import { TBook } from "@import/types/book.types";

export async function onLoveBook({
  id,
  status,
  bookList,
}: {
  id: number;
  status?: boolean;
  bookList: TBook[];
}): Promise<TBook[]> {
  const result: TBook | boolean = bookList.find((item) => item?.id === id) || false;
  let currentLove: TBook[] = (await localForage.getItem("love")) || [];
  if (result !== false) {
    if (status) {
      currentLove.push(result);
    } else {
      currentLove = currentLove.filter((item) => item?.id !== result.id);
    }
  }
  return await localForage.setItem("love", currentLove);
}
