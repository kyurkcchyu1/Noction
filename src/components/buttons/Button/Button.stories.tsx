import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {orange, grey} from "@mui/material/colors";
import {action} from "@storybook/addon-actions";


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
        backgroundColor: orange[500],
        onClick: action("onClick")
    }
}


export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
        backgroundColor: grey[900]
    }
}


