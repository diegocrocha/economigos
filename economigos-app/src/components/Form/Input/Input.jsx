import React from 'react'
import * as S from './style'

const Input = ({primary, label, id, value, onChange, className, ...props}) => {
  return (
    <S.InputContainer className={className} primary={primary}>
      <S.Input
        primary={primary}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        {...props}/>
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputContainer>
  )
}

export default Input;
