import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import StudioCard from ".";

const meta: Meta<typeof StudioCard> = {
  component: StudioCard,
  title: "Studio Card",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StudioCard>;

export const StudioCardDefault: Story = {
  args: {
    image: "",
    video: "/video-disney.mp4",
  },
};
