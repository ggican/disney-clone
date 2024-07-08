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

export const MovieCardPrimary: Story = {
  args: {
    image: <Image alt="image" fill style={{ objectFit: "cover" }} src="/disney.jpg" />,
    title: "",
    video: "/video-disney.mp4",
  },
};
