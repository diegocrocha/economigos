import React from 'react'
import * as S from './style'
import moedaGasto from '../../assets/moeda-gasto.svg'
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"
import GroupPieChart from "../../components/Charts/GroupPieChart";

export default function GastosPorCategoria({dataCategorias}) {

    let maior = -1, meio = -1, menor = -1;
    let maiorCategoria = {"nome" : "-----"}, 
        meioCategoria = {"nome" : "-----"}, 
        menorCategoria = {"nome" : "-----"};

    for (let index = 0; index < dataCategorias.length; index++) {
        if (dataCategorias[index].porcentagem >= maior) {
            maior = dataCategorias[index].porcentagem;
            maiorCategoria = dataCategorias[index];

        }else if(dataCategorias[index].porcentagem >= meio && dataCategorias[index].porcentagem < maior){
            meio = dataCategorias[index].porcentagem;
            meioCategoria = dataCategorias[index];

        }else if (dataCategorias[index].porcentagem >= menor &&dataCategorias[index].porcentagem < meio &&
                  dataCategorias[index].porcentagem < maior) {
           
            menor = dataCategorias[index].porcentagem;
            menorCategoria = dataCategorias[index];
        }
    }

    return (
        <S.GastosPorCategoria>
            <div className="tituloGasto">
                <img src={moedaGasto} alt="" />
                <span>Gastos</span>
            </div>
            <div className="listaDeCategorias">
                <ul>
                    <ItemListaCategoria cor={"#32A287"} nome={maiorCategoria.nome}></ItemListaCategoria>
                    <ItemListaCategoria cor={"#23705E"} nome={meioCategoria.nome}></ItemListaCategoria>
                    <ItemListaCategoria cor={"#133D33"} nome={menorCategoria.nome}></ItemListaCategoria>
                </ul>
            </div>
            <div className="graficoDeCategorias">
                <GroupPieChart maior={maiorCategoria} meio={meioCategoria} menor={menorCategoria}/>
            </div>
        </S.GastosPorCategoria>
    )
}
