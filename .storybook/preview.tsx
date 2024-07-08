import type { Preview } from "@storybook/react";
import { Mulish } from "next/font/google";
import React from "react";
import { ThemeProvider } from "styled-components";

import "../src/app/global.css";
import { theme } from "../src/components/styles/theme";

const themeLocal = theme;

const MulishFont = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const globalTypes = {};

// const withProvider = (Story) => {
//   return <main></main>;
// };

// export const decorators = [withProvider];

const preview: Preview = {
  // globalTypes: {
  //   locale: {
  //     name: "Locale",
  //     description: "Global locale selector for components",
  //     defaultValue: "id",
  //     toolbar: {
  //       icon: "globe",
  //       items: [
  //         { value: "id", right: "🇮🇩", title: "Indonesian" },
  //         { value: "en", right: "🇺🇸", title: "English" },
  //       ],
  //     },
  //   },
  // },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <main className={MulishFont.className}>
            <div id="portal-root"></div>
            <Story />
          </main>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
