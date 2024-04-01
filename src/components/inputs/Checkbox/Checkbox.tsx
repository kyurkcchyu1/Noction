import { forwardRef, Ref } from "react";
import { FormControlLabel } from "@mui/material";

import type { Props } from "./types";
import * as S from "./styled";

const CheckboxComponent = (
  { label, id, onChange, size, name, onBlur, value, checked, disabled }: Props,
  ref: Ref<HTMLInputElement>,
) => (
  <FormControlLabel
    ref={ref}
    label={label}
    control={
      <S.Checkbox
        id={id}
        name={name}
        onChange={onChange}
        size={size}
        onBlur={onBlur}
        value={value}
        checked={checked}
        disabled={disabled}
      />
    }
  />
);

export const Checkbox = forwardRef<HTMLInputElement, Props>(CheckboxComponent);
