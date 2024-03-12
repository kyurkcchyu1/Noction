import {Props} from "@/components/inputs/TextField/types";
import * as S from './styled'
import { forwardRef } from "react";
import { FormControl } from "@mui/material";

export const TextField = forwardRef<HTMLInputElement, Props>(
    ({
         label,
         error,
         disabled,
         onBlur,
         name,
         helperText
     }, ref) => (
        <FormControl variant="standard"
                     disabled={disabled}
                     sx={{
                         width: 1/2,
                     }}
        >
            <S.InputLabel
                shrink
                htmlFor={label}
            >
                {label}
            </S.InputLabel>
            <S.InputBase
                id={label}
                placeholder="Type some text:"
                ref={ref}
                onBlur={onBlur}
                name={name}
            />
            {error && <S.HelperText>{helperText}</S.HelperText>}
        </FormControl>
))
