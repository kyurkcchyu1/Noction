import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {orange} from "@mui/material/colors";


const meta: Meta<typeof Button> = {
    title: "Buttons/Button",
    component: Button,
}

export default meta;

type Story = StoryObj<typeof Button>;


export const Default: Story = {
    args: {
        label: "Default",
        disabled: false,
        backgroundColor: orange[500]
    }
}


export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
        backgroundColor: orange[500]
    }
}


