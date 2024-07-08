import type { Meta, StoryObj } from "@storybook/react";

import LandingVideo from "./";

const meta: Meta<typeof LandingVideo> = {
  component: LandingVideo,
  title: "Landing Video",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingVideo>;

export const LandingVideoPrimary: Story = {
  args: {
    controls: false,
    muted: true,
    autoPlay: true,
    height: "100vh",
    src: "/videoplayback.mp4",
  },
};

export const LandingVideoWithControl: Story = {
  args: {
    controls: false,
    muted: false,
    autoPlay: false,
    height: "500px",
    src: "/videoplayback.mp4",
  },
};
