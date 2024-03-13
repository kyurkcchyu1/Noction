'use client'
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import * as S from "./styled"
import type { Props } from "@/components/inputs/NumberInput/types";
import { forwardRef } from "react";
import { FormControl } from "@mui/material";



export const NumberInput = forwardRef<HTMLInputElement, Props>((
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
    }, ref) => {
    return (
        <FormControl
            variant="standard"
            disabled={disabled}
            sx={{ width: 1/2 }}
        >
            <S.InputLabel
                htmlFor={id}
                shrink
                error={error}
            >
                {label}
            </S.InputLabel>
            <BaseNumberInput
                min={min}
                max={max}
                required={required}
                onInputChange={onInputChange}
                error={error}
                disabled={disabled}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                ref={ref}
                componentName={name}
                slots={{
                    root: S.StyledInputRoot,
                    input: S.StyledInputElement,
                    incrementButton: S.StyledButton,
                    decrementButton: S.StyledButton,
                }}
                slotProps={{
                    incrementButton: {
                        children: '▴',
                    },
                    decrementButton: {
                        children: '▾',
                    },
                }}
            />
            {error && <S.HelperText>{errorMessage}</S.HelperText>}
        </FormControl>
    );
});