import React from 'react'
import * as S from './style'
import barChart from "../../assets/bar-chart.svg"
import GroupBarChart from '../Charts/GroupBarChart'
import GreyPig from "../../components/GreyPig/GreyPig";

export default function BalancoMensal({isEmpty, dataReceitas, dataGastos}) {
    return (
        <S.BalancoMensal>
            <div>
                <img src={barChart} alt=""/>
                <span className="titleChart">Balanço Mensal</span>
            </div>
            <ul>
                <S.DescricaoBalancoMensal cor={"#32A287"} nome={"Receitas"}/>
                <S.DescricaoBalancoMensal cor={"#A23232"} nome={"Gastos"}/>
            </ul>
            {isEmpty ?
                <GreyPig height={40} mensagem="Você não tem lançamentos!"/>
                : 
                <div className="barChart">
                    <GroupBarChart
                    dataReceitas={dataReceitas}
                    dataGastos={dataGastos}
                    />
                </div>
            }
        </S.BalancoMensal>
    )
}
