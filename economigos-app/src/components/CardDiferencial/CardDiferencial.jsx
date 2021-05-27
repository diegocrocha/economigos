import React from 'react'
import * as S from './style'

const CardDiferencial = ({icon, title, text}) => {
  return (
    <S.CardDiferencial>
      <img src={icon} alt=''/>
      <h4>{title}</h4>
      <p>{text}</p>
    </S.CardDiferencial>
  )
}

export default CardDiferencial;
