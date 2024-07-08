import type { Url } from "next/dist/shared/lib/router/router";

import { ValueWishList } from "@import/providers/LandingPageProviders";

export type ISectionsProps = {
  type?: string;
  title: string;
  viewUrl: Url;
  data: any;
  onWishList: (value: ValueWishList) => void;
};
