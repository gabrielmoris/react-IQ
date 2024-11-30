import type { Meta, StoryObj } from "@storybook/react";

import { ExpandableTextContainer } from "./DeepJudge";

const meta = {
  title: "Example/DeepJudge",
  component: ExpandableTextContainer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["Expandablse", "Text", "Container", "autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    text: "",
    maxLines: 0,
  },
} satisfies Meta<typeof ExpandableTextContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeepJudge: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    maxLines: 2,
  },
};
