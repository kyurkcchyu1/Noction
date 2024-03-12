import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';


const meta: Meta<typeof TextField> = {
    title: "Inputs/TextField",
    component: TextField
}

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        label: "Type some text:",
        error: false,
        disabled: false
    }
}