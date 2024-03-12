import React from 'react';
import { FormControlLabel } from "@mui/material";
import { Props } from "@/components/inputs/Checkbox/types";
import * as S from './styled';


export const Checkbox = (
    {
        label,
        disabled,
        id,
        onChange,
        checked
    }: Props) => (
        <FormControlLabel
            control={<S.Checkbox
                onChange={onChange}
                id={id}
            />}
            label={label}
            disabled={disabled}
        />
    );


