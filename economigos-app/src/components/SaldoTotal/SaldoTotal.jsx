import React from 'react';
import * as S from './style'
import eyeOpen from '../../assets/eye-open.svg'
import visualizacaoSaldoFechado from '../../assets/visualizacaoSaldoFechado.svg'

function SaldoTotal({saldo}) {
    const [olho, setOlho] = React.useState(true);

    return (
        <S.SaldoTotal>
            <div className="visualizacaoSaldo">
                <img onClick={() => setOlho(!olho)} src={olho ? visualizacaoSaldoFechado : eyeOpen} alt="" />
            </div>
            <div className="textSaldoTotal">Saldo Total</div>
            <div className="saldoTotal">R$<span>{olho ? (saldo ? saldo.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : "0,00") : "*****"}</span></div>
        </S.SaldoTotal>
    );
}

export default SaldoTotal;