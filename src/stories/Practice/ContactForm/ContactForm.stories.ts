import type { Meta, StoryObj } from "@storybook/react";

import { ContactForm } from "./ContactForm";

const meta = {
  title: "Example/Contact-form",
  component: ContactForm,

  tags: ["Expandablse", "Text", "Container"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactFormComponent: Story = {};
