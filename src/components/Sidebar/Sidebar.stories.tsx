import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import Sidebar from ".";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Sidebar",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarDefault: Story = {
  args: {
    title: "",
  },
};
