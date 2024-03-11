import { NumberInputProps } from "@mui/base";


export type Props = NumberInputProps & {
    register?: {},
    defaultValue?: number,
    disabled?: boolean,
    error?: boolean,
    min?: number,
    max?: number,
    onChange?: () => void,
    placeholder?: string,
    required?: boolean,
    value?: number | null
}