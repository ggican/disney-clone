/* eslint-disable no-use-before-define */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";
import type { FC, ReactElement } from "react";
import React, { useState } from "react";

import { TChildrenElement } from "@import/types/react.types";
import { LandingPageProvider } from "@import/providers/LandingPageProviders";

/* React Testing Library */

// Ref: https://testing-library.com/docs/react-testing-library/setup#custom-render
const AllTheProviders: FC<any> = ({ children }: TChildrenElement) => {
  const [queryClient] = useState(() => new QueryClient());
  // wrap children with other providers that you may use, e.g. react-query <QueryClientProvider>
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPageProvider>{children}</LandingPageProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

/* Re-export testing related helpers */
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
export { mswServer } from "./mocks/msw-server";
export { http } from "msw";
