import React from 'react'
import * as S from './style'
import GreenPig from "../../assets/green-pig.svg";


export default function TelaLateralApp({fechar}) {
    return (
        <>
            <S.TelaLateralApp fechar={fechar}>
                <div className="mensagemQuandoFechado">
                    ECONO<span>MIGOS</span>
                </div>
                <img className="imagemQuandoFechado" src={GreenPig} alt=""/>
                
            </S.TelaLateralApp>
        </>
    )
}
