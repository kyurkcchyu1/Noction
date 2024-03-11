import { ButtonProps } from "@mui/base";


export type Props = ButtonProps & {
    type?: string;
    variant?: 'contained' | 'outlined' | 'text' | string;
    backgroundColor?: string;
    disabled: boolean;
    label: string;
    onClick?: () => void;
}
