import { CheckboxProps } from "@mui/material";

export type Props = CheckboxProps & {
    label: string,
    checked?: boolean,
    defaultChecked?: boolean,
    disabled?: boolean,
    id?: string,
    onChange?: () => void
}

