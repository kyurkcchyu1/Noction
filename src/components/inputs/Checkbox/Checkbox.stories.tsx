import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import {action} from "@storybook/addon-actions";


const meta: Meta<typeof Checkbox> = {
    title: "Inputs/Checkbox",
    component: Checkbox
}

export default meta;

type Story = StoryObj<typeof Checkbox>;


export const Default: Story = {
    args: {
        label: "Label for checkbox",
        checked: false,
        onChange: action('onChange')
    }
};