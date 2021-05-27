import React from 'react'
import * as S from './style'

export default function ItemListaCategoria({nome, cor}) {
    return (
        <S.ItemListaCategoria color={cor}>
            <div></div>
            <span>{nome}</span>
        </S.ItemListaCategoria>
    )
}
