import {TextField as MuiTextField} from '@mui/material'
import {TextFieldProps} from "./types";
export const TextField = ({...rest}: TextFieldProps) => (
    <MuiTextField
        {...rest}
    />
)