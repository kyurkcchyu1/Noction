import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { Android, Balance } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    iconSize: 20,
    onClick: action("onClick"),
  },
  render: (args) => {
    return (
      <Stack spacing={2} direction="row">
        <Button {...args} variant="text">
          Text
        </Button>
        <Button {...args} variant="outlined">
          Outlined
        </Button>
        <Button {...args} variant="contained">
          Contained
        </Button>
      </Stack>
    );
  },
};

export const Disabled: Story = {
  args: {
    iconSize: 20,
    disabled: true,
  },
  render: (args) => {
    return (
      <Stack spacing={2} direction="row">
        <Button {...args} variant="text">
          Text
        </Button>
        <Button {...args} variant="outlined">
          Outlined
        </Button>
        <Button {...args} variant="contained">
          Contained
        </Button>
      </Stack>
    );
  },
};

export const Loading: Story = {
  args: {
    iconSize: 20,
    isLoading: true,
  },
  render: (args) => {
    return (
      <Stack spacing={2} direction="row">
        <Button {...args} variant="text">
          Text
        </Button>
        <Button {...args} variant="outlined">
          Outlined
        </Button>
        <Button {...args} variant="contained">
          Contained
        </Button>
      </Stack>
    );
  },
};

export const WithIcon: Story = {
  args: {
    hasIcon: true,
    iconSize: 20,
  },
  render: (args) => {
    return (
      <Stack spacing={2} direction="row">
        <Button {...args} variant="text" iconImage={<Android />}>
          Text
        </Button>
        <Button {...args} variant="outlined" iconImage={<Balance />}>
          Outlined
        </Button>
        <Button {...args} variant="contained">
          Contained
        </Button>
      </Stack>
    );
  },
};
