import React from 'react'
import * as S from "./style";

export default function BotaoMenuMetas({active, nome}) {
    return (
        <S.Botao active={active}>
            {nome}
        </S.Botao>
    )
}
