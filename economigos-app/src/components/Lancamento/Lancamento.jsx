import React from 'react'
import * as S from "./style";

export default function Lancamento({urlImage, titulo, data, valor, receita}) {
    return (
        <S.Lancamento receita={receita}>
            <img src={urlImage} alt=""/>
            <div className="infosLancamento">
                <p>{titulo}</p>
                <p>{data}</p>
            </div>
            <p className="valorLancamento">R${valor}</p>
        </S.Lancamento>
    )
}
