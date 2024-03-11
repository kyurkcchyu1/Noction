'use client'
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import * as S from "./styled"
import type { Props } from "@/components/inputs/NumberInput/types";
import {forwardRef} from "react";



export const NumberInput = forwardRef<HTMLInputElement, Props>((
    {
        placeholder,
        disabled,
        register,
        defaultValue,
        error,
        min,
        max,
        onChange,
        required,
        value,
        ...props
    },
        ref) => {
    return (
        <BaseNumberInput
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
            placeholder={placeholder}
            {...props}
            ref={ref}
        />
    );
});

// export const NumberInput = ({placeholder,  ...props}: Props) => {
//     return (
//         <>
//             <CustomNumberInput
//                 aria-label="Demo number input"
//                 placeholder={placeholder}
//             />
//         </>
//     );
// }

