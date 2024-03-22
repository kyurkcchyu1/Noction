import { NumberInputProps } from "@mui/base";

export type Props = NumberInputProps & {
  label: string;
  name?: string;
  errorMessage?: string;
  onChange: (value: number | null) => void;
};
