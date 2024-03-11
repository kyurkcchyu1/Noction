import React from 'react';
import * as S from "./styled";
import { Props } from './types'

export const Button = ({label, disabled, backgroundColor, variant, ...props}: Props) => {
    return (
        <S.Button
            {...props}
            bgColor={backgroundColor}
            disabled={disabled}
            variant={variant}
        >
            {label}
        </S.Button>
    );
};

