import type { Meta, StoryObj } from "@storybook/react";

import { ConfigForm } from "@components";
import { useConfigData } from "./hooks";

const meta: Meta<typeof ConfigForm> = {
  title: "Forms/ConfigForm",
  component: ConfigForm,
};

export default meta;

type Story = StoryObj<typeof ConfigForm>;

export const ConfigurationForm: Story = {
  render: () => {
    const { data } = useConfigData();

    if (!data) {
      return <div>No data..</div>;
    }

    return <ConfigForm data={data} />;
  },
};
