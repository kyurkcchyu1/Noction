import { Stack } from "@mui/material";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "",
    onChange: action("onChange"),
  },
  render: (args) => {
    return (
      <Stack spacing={2} direction="row">
        <Checkbox {...args} label="Small" size="small" />
        <Checkbox {...args} label="Medium" size="medium" />
        <Checkbox {...args} label="Large" size="large" />
      </Stack>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Checkbox label",
    disabled: true,
  },

  render: (args) => {
    return (
      <Stack spacing={2} direction="row">
        <Checkbox {...args} label="Small" size="small" disabled />
        <Checkbox {...args} label="Medium" size="medium" disabled />
        <Checkbox {...args} label="Large" size="large" disabled />
      </Stack>
    );
  },
};
