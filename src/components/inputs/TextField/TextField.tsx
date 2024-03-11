import {TextField as MuiTextField} from "@mui/material";
import {Props} from "@/components/inputs/TextField/types";
import * as S from './styled'



export const TextField = ({label, helperText, error, ...props}: Props) => (
        <S.TextField
            label={label}
            helperText={helperText}
            error={error}
        />
    );
