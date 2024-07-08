"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@import/components/styles/theme";
import { TChildrenElement } from "@import/types/react.types";

import { MockProvider } from "./MockProviders";

export default function Providers({ children }: TChildrenElement) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MockProvider>{children}</MockProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
