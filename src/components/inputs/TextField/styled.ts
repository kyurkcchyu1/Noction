import styled from "@emotion/styled";
import {TextField as MuiTextField, textFieldClasses, outlinedInputClasses, inputBaseClasses} from "@mui/material";

export const TextField = styled(MuiTextField)`
    width: 50%;
    
    &.${textFieldClasses.root} {
        //background-color: #333333;
    }
    
    &.${outlinedInputClasses.root} {
        border-radius: 30px;
    }

    &.${inputBaseClasses.root} {
        border-radius: 30px;
    }
    
`





