import {Props} from "@/components/inputs/TextField/types";
import * as S from './styled'
import {forwardRef} from "react";



// export const TextField = ({label, helperText, error, ...props}: Props) => (
//         <S.TextField
//             label={label}
//             helperText={helperText}
//             error={error}
//         />
//     );

export const TextField = forwardRef<HTMLInputElement, Props>(
    ({label,
            helperText,
            error,
            disabled,
            ...props
    }, ref) => (
    <S.TextField
            label={label}
            helperText={helperText}
            error={error}
            disabled={disabled}
            inputRef={ref}
            {...props}
    />
))
