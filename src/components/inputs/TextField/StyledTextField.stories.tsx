import type { Meta, StoryObj } from '@storybook/react';
import { StyledTextField } from './StyledTextField';


const meta: Meta<typeof StyledTextField> = {
    title: "Inputs/TextField",
    component: StyledTextField
}

export default meta;

type Story = StoryObj<typeof StyledTextField>;

export const Default: Story = {
    args: {
        label: "Default",
    }
}