import React from 'react';
import * as S from "./styled";
import { Props } from './types'

export const Button = ({label, disabled, backgroundColor, ...props}: Props) => {
    return (
        <S.Button
            bgColor={backgroundColor}
            disabled={disabled}
            {...props}
        >
            {label}
        </S.Button>
    );
};

