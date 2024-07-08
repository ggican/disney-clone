import type { Meta, StoryObj } from "@storybook/react";

import SearchBox from ".";

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  title: "Search Box",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const SearchBoxDefault: Story = {
  args: {
    title: "",
    placeholder: "Movies, shows and more",
    name: "search",
  },
};
