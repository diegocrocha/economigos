import React from 'react'
import * as S from './style'

export default function Tooltip({title, children}) {
    return (
        <S.Container>
            {children}
            <span>{title}</span>
        </S.Container>
    )
}
