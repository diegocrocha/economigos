import React from 'react'
import Pesquisa from "../../assets/search.svg";
import * as S from "./style";

export default function SearchPrincipal() {
    return (
        <S.Search>
            <S.SearchInput>
                <S.Input type="text" placeholder="Pesquise por pessoas, gastos ou receitas..."/>
            </S.SearchInput>
            <S.SearchImage>
                <S.ImgSearch src={Pesquisa}/>
            </S.SearchImage>
        </S.Search>
    )
}
