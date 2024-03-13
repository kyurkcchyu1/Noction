import React from 'react';
import * as S from "./styled";
import { Props } from './types'
import { CircularProgress } from "@mui/material";
import { Favorite } from '@mui/icons-material';

export const Button = ({
                           children,
                           color,
                           disabled=false,
                           size,
                           type,
                           variant,
                           onClick,
                           isLoading=false,
                           hasIcon=false,
                           iconSize=20,

}: Props) => {
    return (
        hasIcon ? <S.Button
            disabled={disabled}
            color={color}
            size={size}
            type={type}
            variant={variant}
            onClick={onClick}
            startIcon={isLoading ? (<CircularProgress size={iconSize} color='inherit'/>) : (<Favorite />)}
        >
            {children}
        </S.Button>
            :
            <S.Button
                disabled={disabled}
                color={color}
                size={size}
                type={type}
                variant={variant}
                onClick={onClick}
                startIcon={isLoading ? (<CircularProgress size={iconSize} color='inherit'/>) : null}
            >
                {children}
            </S.Button>
    );
};

