import type { Meta, StoryObj } from "@storybook/react";

import HolyGrail from "./HolyGrail";

const meta = {
  title: "Example/HolyGrail",
  component: HolyGrail,
  tags: ["Expandablse", "Text", "Container"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof HolyGrail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HolyGrailComponent: Story = {};
