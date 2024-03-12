import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';
import {action} from "@storybook/addon-actions";


const meta: Meta<typeof NumberInput> = {
    title: "Inputs/NumberInput",
    component: NumberInput
}

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
    args: {
        placeholder: "Type a number…",
        error: false,
        onChange: action('onChange')
    }
}