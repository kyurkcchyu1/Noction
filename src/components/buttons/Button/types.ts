import { ButtonProps } from "@mui/base";


export type Props = ButtonProps & {
    type?: string;
    backgroundColor?: string;
    disabled: boolean;
    label: string;
    onClick?: () => void;
}
