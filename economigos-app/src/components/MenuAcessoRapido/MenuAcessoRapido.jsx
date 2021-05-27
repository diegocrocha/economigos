import React from 'react'
import * as S from './style'
import OpcoesAcessoRapido from "../../components/OpcoesAcessoRapido/OpcoesAcessoRapido";
import ModalContabil from '../ModalContabil/ModalContabil';

export default function MenuAcessoRapido() {
  const [modalR, setModalR] = React.useState(false);
  const [modalG, setModalG] = React.useState(false);



    return (
        <S.MenuAcessoRapido>
            <OpcoesAcessoRapido click={() => setModalR(true)} nome={"Receitas"} cor={"rgb(50, 162, 135)"} />
            <ModalContabil
              type="RECEITA"
              color="rgb(50, 162, 135)"
              modal={modalR}
              setModal={setModalR} />
            <OpcoesAcessoRapido click={() => setModalG(true)} nome={"Gastos"} cor={"#A23232"} />
            <ModalContabil
              type="GASTO"
              color="#A23232"
              modal={modalG}
              setModal={setModalG} />
            <OpcoesAcessoRapido nome={"Telegram"} cor={" #0088cc"} />
            <OpcoesAcessoRapido click={() => setModalG(true)} nome={"Extratos"} cor={"#312F2F"} />
        </S.MenuAcessoRapido>
    )
}
