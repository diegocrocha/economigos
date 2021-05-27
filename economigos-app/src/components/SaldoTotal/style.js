import styled from "styled-components";

export const SaldoTotal = styled.div`
    width: 49.5%;
    height: 40%;
    background-color: #32A287;
    border: 3px solid #32A287;
    border-radius: 14px;
    margin-right: 1%;

    .visualizacaoSaldo{
        width: 100%;
        height: 20%;
        margin-top: 1%;
        font-family: 'Poppins';

        img{
            height: 100%;
            margin-left: 2%;
        
            &:hover{
                cursor: pointer;
            }
        }
    }

    .textSaldoTotal{
        width: 100%;
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 1rem;
    }

    .saldoTotal{
        width: 100%;
        height: 64%;
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
    }

    span{
        font-size: 2.5rem;
    }
`

