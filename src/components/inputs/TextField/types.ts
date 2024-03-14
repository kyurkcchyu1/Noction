import { TextFieldProps } from "@mui/material";

export type Props = {
  errorMessage?: string;
} & Pick<
  TextFieldProps,
  | "label"
  | "type"
  | "error"
  | "disabled"
  | "onBlur"
  | "placeholder"
  | "id"
  | "name"
>;
