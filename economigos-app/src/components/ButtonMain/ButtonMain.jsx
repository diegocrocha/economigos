import React from 'react'
import * as S from './style'

const ButtonMain = ({children, ...props}) => {
  return (
    <S.ButtonMain {...props}>
      {children}
    </S.ButtonMain>
  )
}

export default ButtonMain;