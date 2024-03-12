import { TextFieldProps } from "@mui/material";


export type Props = TextFieldProps & {
    label?: string,
    error?: boolean,
    helperText?: string,
    disabled?: boolean,
}




