import { ButtonProps } from "@mui/material";


export type Props = ButtonProps & {
    isLoading?: boolean;
    hasIcon?: boolean;
    iconSize?: number;
}
