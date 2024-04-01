import { ButtonProps } from "@mui/material";

export type Props = {
  isLoading?: boolean;
  hasIcon?: boolean;
  iconSize?: number;
  iconImage?: React.ReactNode;
} & Pick<
  ButtonProps,
  "children" | "color" | "disabled" | "size" | "type" | "variant" | "onClick"
>;
