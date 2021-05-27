import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import ButtonS from '../../components/ButtonS/ButtonS'
import * as S from './style'

export default function HeaderSign() {
  return (
    <S.HeaderSign>
      <S.ContainerHeader className="containerHeader">
        <img src={Logo}/>
        <Link to="/">
          <ButtonS>Voltar</ButtonS>
        </Link>
      </S.ContainerHeader>
    </S.HeaderSign>
  )
}
