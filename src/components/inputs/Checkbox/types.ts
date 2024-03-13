import { CheckboxProps } from "@mui/material";

export type Props = {
    label: string,
} & Pick<CheckboxProps, 'disabled'
    | 'id'
    | 'onChange'
    | 'size'
>