import { Props } from "@/components/inputs/TextField/types";
import * as S from './styled'
import { forwardRef } from "react";
import { FormControl } from "@mui/material";

export const TextField = forwardRef<HTMLInputElement, Props>(
    ({
         label,
         type,
         error,
         disabled,
         onBlur,
         name,
         errorMessage,
         placeholder,
         id,
     }, ref) => (
        <FormControl
            variant="standard"
            disabled={disabled}
            sx={{ width: 1/2 }}
        >
            <S.InputLabel
                shrink
                htmlFor={id}
                error={error}
            >
                {label}
            </S.InputLabel>
            <S.InputBase
                id={id}
                type={type}
                error={error}
                placeholder={placeholder}
                ref={ref}
                onBlur={onBlur}
                name={name}
            />
            {error && <S.HelperText>{errorMessage}</S.HelperText>}
        </FormControl>
))
