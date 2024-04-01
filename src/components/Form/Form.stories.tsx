import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";

import { Form } from "./Form";
import { useConfigData } from "@components";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const ConfigForm: Story = {
  render: () => {
    const { data } = useConfigData();

    if (!data) {
      return <div>No data..</div>;
    }

    return (
      <Stack spacing={2} direction="row" justifyContent="center">
        <Form data={data} />
      </Stack>
    );
  },
};
