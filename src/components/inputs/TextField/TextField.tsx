import { forwardRef, Ref } from "react";
import { FormControl } from "@mui/material";
import { Props } from "@/components/inputs/TextField/types";
import * as S from "./styled";

const TextFieldComponent = (
  {
    label,
    type,
    error,
    disabled,
    onBlur,
    name,
    errorMessage,
    placeholder,
    onChange,
    value,
  }: Props,
  ref: Ref<HTMLInputElement>,
) => (
  <FormControl variant="standard" disabled={disabled} sx={{ width: 1 / 2 }}>
    <S.InputLabel shrink error={error}>
      {label}
    </S.InputLabel>
    <S.InputBase
      type={type}
      value={value}
      placeholder={placeholder}
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <S.HelperText>{errorMessage}</S.HelperText>}
  </FormControl>
);

export const TextField = forwardRef<HTMLInputElement, Props>(
  TextFieldComponent,
);
