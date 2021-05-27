import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './style'
import GraficosFundoRedondo from '../../components/LogosSVGComponentes/GraficosFundoRedondo/GraficosFundoRedondo'
import ContasFundoRedondo from '../../components/LogosSVGComponentes/ContasFundoRedondo/ContasFundoRedondo'
import CartoesFundoRedondo from '../../components/LogosSVGComponentes/CartoesFundoRedondo/CartoesFundoRedondo'
import MetasFundoRedondo from '../../components/LogosSVGComponentes/MetasFundoRedondo/MetasFundoRedondo'
import EconopontosFundoRedondo from '../../components/LogosSVGComponentes/EconopontosFundoRedondo/EconopontosFundoRedondo'
import Sair from '../../components/LogosSVGComponentes/Sair/Sair'

export default function NavBarApp({ name }) {
  return (
    <S.Nav>
      <S.Ola>Olá, {name}!</S.Ola>
      <ul>
        <S.BackItemNav className="active-nav">
          <NavLink to="/app/painel" activeClassName="active-nav">
            <GraficosFundoRedondo active />
            <S.ItemNav className="active">
              Painel
            </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <NavLink to="/app/contas">
            <ContasFundoRedondo />
            <S.ItemNav>
              Contas
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <NavLink to="/app/cartoes">
            <CartoesFundoRedondo/>
            <S.ItemNav>
              Cartões
            </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav active>
          <NavLink to="/app/metas">
            <MetasFundoRedondo/>
            <S.ItemNav active>
              Metas
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <NavLink to="/app/econopontos">
            <EconopontosFundoRedondo/>
            <S.ItemNav>
              Econopontos
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <Sair/>
          <S.ItemNav>
            Sair
          </S.ItemNav>
        </S.BackItemNav>
      </ul>
    </S.Nav>
  )
}
