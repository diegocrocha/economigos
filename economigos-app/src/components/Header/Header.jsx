import React from 'react'
import * as S from './style'
import Logo from '../../assets/logo.svg'
import ButtonMain from '../ButtonMain/ButtonMain'
import ButtonS from '../ButtonS/ButtonS'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} alt=''/>
      <NavBar />
      <div>
        <Link to="/login">
          <ButtonS>Login</ButtonS>
        </Link>
        <Link to="/cadastro">
          <ButtonMain>Cadastre-se</ButtonMain>
        </Link>
      </div>
    </S.Header>
  )
}

export default Header;
