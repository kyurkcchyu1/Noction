import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { Form } from "./Form";
import { data } from "../../data/index";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const MyForm: Story = {
  render: () => {
    return (
      <Stack spacing={2} direction="row">
        <Form data={data} />
      </Stack>
    );
  },
};
