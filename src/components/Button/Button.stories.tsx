import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    block: true,
    children: "Open Button",
  },
};

export const ButtonNonBlock: Story = {
  args: {
    block: false,
    children: "Open Button",
  },
};
