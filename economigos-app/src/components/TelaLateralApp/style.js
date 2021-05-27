import styled from "styled-components";
import IconeProximo from "../../assets/iconeProximo.svg";



export const TelaLateralApp = styled.div`
    width: ${props => props.fechar ? "0%" : "19.5%"};
    height: 90vh;
    background-color: ${props => props.fechar ? "white" : "transparent"};
    border-top-left-radius: 14px;
    margin-left: ${props => props.fechar ? "19.5%" : "0.5%"};
    transition: ${props => props.fechar ? "all 1s" : "all 1s 0.8s"};

    .mensagemQuandoFechado{
        width: 164px;
        height: 14%;
        margin: auto;
        margin-top: 58%;
        word-break: break-all;
        text-align: center;
        line-height: 79%;
        font-size: 45px;
        font-weight: 700;
        color: #32A287;

        span{
            color: white;
            text-shadow: 0px 0px 2px black;    
        }
    }

    .imagemQuandoFechado{
        margin: auto;
        height: 22%;
    }
`

export const BtnFecharTela = styled.button`
    height: 35px;
    width: 35px;
    position: absolute;
    top: 8%;
    border-radius: 50%;
    border: none;
    background-size: 135%;
    transition: box-shadow 0.5s;
    background-image: url("${IconeProximo}");
    background-position: center center;

    &:hover{
        cursor:pointer;
        box-shadow: 0px 0px 7px 0px grey;
    };
`