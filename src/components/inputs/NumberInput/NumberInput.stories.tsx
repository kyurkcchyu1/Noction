import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof NumberInput> = {
  title: "Inputs/NumberInput",
  component: NumberInput,
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    label: "Number input:",
    placeholder: "Type a number…",
    error: true,
    errorMessage: "Error...",
    onChange: action("onChange"),
  },
};
