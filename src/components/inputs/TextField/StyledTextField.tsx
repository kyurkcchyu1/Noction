import {FormHelperText, InputLabel, TextField as MuiTextField} from '@mui/material'
// import {CustomTextFieldProps} from "@/components/inputs/TextField/types";
// import styled from "@emotion/styled";
import {FormControl, Input} from "@mui/base";
import React from "react";
import {CustomTextFieldProps} from "@/components/inputs/TextField/types";


export const StyledTextField = ({label, helperText, ...props}: CustomTextFieldProps) =>
    // <TextField
    //     {...props}
    // />
    (
        <FormControl {...props}>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input
                id="my-input"
                aria-describedby="my-helper-text"

                slotProps={{
                    input: {
                        className: "storybook-input"
                    }
                }}
            />
            <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
        </FormControl>
    );
