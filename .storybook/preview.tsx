import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { mswLoader } from "msw-storybook-addon";

import { theme } from "@theme/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
