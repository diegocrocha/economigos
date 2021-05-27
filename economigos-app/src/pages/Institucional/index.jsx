import React from 'react'
import * as S from './style'
import api from '../../services/api';
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { Input } from '../../components/Form/Input/Input';
import ButtonMain from '../../components/ButtonMain/ButtonMain';
import CardDiferencial from '../../components/CardDiferencial/CardDiferencial';
import IconD1 from '../../assets/telegram-economigos.svg'
import IconD2 from '../../assets/users.svg'
import IconD3 from '../../assets/alvo.svg'
import IconD4 from '../../assets/credit-card.svg'
import IconD5 from '../../assets/grafico.svg'
import IconD6 from '../../assets/creative-idea.svg'


function Institucional() {

  return (
    <>
      <S.Home>
        <Header />
        <S.TitleHome><span style={{color: '#44CE6C'}}>Econo</span>migos</S.TitleHome>
        <S.TextHome>A facilidade, organização e melhora financeira que você precisa!</S.TextHome>
        <Link to="/cadastro">
          <ButtonMain style={{width: '196px', height: '47px'}}>Cadastre-se</ButtonMain>
        </Link>
      </S.Home>
      <S.Diferencial>
        <h1>Conheça nosso diferencial</h1>
        <S.ContainerDiferencial>
        <CardDiferencial
            icon={IconD3}
            title="Crie metas para atingir seus objetivos financeiros"
            text="Com a Economigos você poderá criar metas para alcançar um objetivo que envolva suas finanças. E não se preocupe, nós iremos te ajudar a realizar seus sonhos."/>
          <CardDiferencial
            icon={IconD2}
            title="Crie contas compartilhadas com seus companheiros"
            text="Com a nossa aplicação você poderá criar uma conta compartilhada com quantas pessoas quiser. Podendo compartilhar os gastos e as despesas de forma justa."/>
          <CardDiferencial
            icon={IconD6}
            title="Tenha nosso auxílio para lembrar de alimentar o app"
            text="Nossa aplicação será responsável por te lembrar de cadastrar suas receitas e despesas diárias, claro, com a frequência que você desejar."/>
          <CardDiferencial
            icon={IconD5}
            title="Tenha dashboards que irão te auxiliar constantemente"
            text="Nossa aplicação conta com dashboards que pretendem trazer informações claras e objetivas para você poder otimizar seu tempo no momento de tomar uma decisão."/>
          <CardDiferencial
            icon={IconD4}
            title="Separe suas contas do jeito que for mais fácil"
            text="Com a nossa aplicação você irá criar quantas contas quiser e conseguirá separar de qual conta seus gastos são."/>
          <CardDiferencial
            icon={IconD1}
            title="Cadastre seus gastos pelo telegram"
            text="Utilize o telegram para cadastrar suas despesas e receitas em nosso aplicativo."/>
        </S.ContainerDiferencial>
      </S.Diferencial>
      <S.Meta>
        <h1>Utilizando nossas metas</h1>
      </S.Meta>
    </>
  )
}

export default Institucional;

