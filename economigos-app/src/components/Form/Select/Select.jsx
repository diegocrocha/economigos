import React from 'react';
import * as S from "./style"

export const Select = ({options, label, value, setValue, className, type, ...props}) => {
    return (
      <S.SelectContainer className={className}>
        <S.Select {...props} value={value} onChange={({target}) => setValue(target.value)}>
               <option value='' disabled>Selecione</option>
               {options.map(option =>
                    <option key={option.id} value={option.id}>{type === "CONTAS" ? option.apelido : option.categoria}</option>
                )}
            </S.Select>
            <S.Label>
            {label}
        </S.Label>
      </S.SelectContainer>
    )
}