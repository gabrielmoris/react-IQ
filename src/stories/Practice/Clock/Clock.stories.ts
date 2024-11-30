import type { Meta, StoryObj } from "@storybook/react";

import Clock from "./Clock";

const meta = {
  title: "Example/Clock",
  component: Clock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["Expandablse", "Text", "Container"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClockComponent: Story = {};
