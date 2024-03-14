import React from "react";
import { FormControlLabel } from "@mui/material";
import { Props } from "./types";
import * as S from "./styled";

export const Checkbox = ({ label, disabled, id, onChange, size }: Props) => (
  <FormControlLabel
    label={label}
    disabled={disabled}
    control={<S.Checkbox id={id} onChange={onChange} size={size} />}
  />
);
