import { CheckboxProps } from "@mui/material";

export type Props = {
  label: string;
  name?: string;
} & Pick<
  CheckboxProps,
  "id" | "onChange" | "size" | "onBlur" | "value" | "checked"
>;
