"use client";
import { forwardRef, Ref } from "react";
import { FormControl } from "@mui/material";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import type { Props } from "@/components/inputs/NumberInput/types";
import * as S from "./styled";

export const NumberInputComponent = (
  {
    id,
    name,
    value,
    label,
    placeholder,
    disabled,
    defaultValue,
    error,
    min,
    max,
    required,
    onChange,
    onBlur,
    onInputChange,
    errorMessage,
  }: Props,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <FormControl variant="standard" disabled={disabled} sx={{ width: 1 / 2 }}>
      <S.InputLabel htmlFor={id} shrink error={error}>
        {label}
      </S.InputLabel>
      <BaseNumberInput
        componentName={name}
        min={min}
        max={max}
        required={required}
        error={error}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={(_, value) => onChange(value)}
        onInputChange={(event) => onChange(+event.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        ref={ref}
        slots={{
          root: S.StyledInputRoot,
          input: S.StyledInputElement,
          incrementButton: S.StyledButton,
          decrementButton: S.StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: "▴",
          },
          decrementButton: {
            children: "▾",
          },
        }}
      />
      {error && <S.HelperText>{errorMessage}</S.HelperText>}
    </FormControl>
  );
};
export const NumberInput = forwardRef<HTMLInputElement, Props>(
  NumberInputComponent,
);
