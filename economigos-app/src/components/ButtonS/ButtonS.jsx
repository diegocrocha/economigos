import React from 'react'
import * as S from './style'

const ButtonS = ({children, ...props}) => {
  return (
    <S.ButtonS {...props}>
      {children}
    </S.ButtonS>
  )
}

export default ButtonS;