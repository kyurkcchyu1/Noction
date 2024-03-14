import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Inputs/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Type some text:",
    placeholder: "Start typing some text...",
    errorMessage: "Error..",
    error: false,
    disabled: false,
    id: "default-text-field",
  },
};

export const Disabled: Story = {
  args: {
    label: "Is disabled:",
    placeholder: "Start typing some text...",
    errorMessage: "Error..",
    error: false,
    disabled: true,
    id: "default-text-field",
  },
};
