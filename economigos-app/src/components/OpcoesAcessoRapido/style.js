import styled from "styled-components";

export const OpcoesAcessoRapido = styled.button`
    height: 80%;
    width: 24%;
    font-weight: bold;
    background-color: #E4E4E4;
    border: none;
    color: ${props => props.color};
    border-radius: 7px;
    margin-right: 0.5%;
    margin-left: 0.5%;
    display: flex;

    &:hover, &:active{
        background-color: ${props => props.color};
        cursor: pointer;
        color: #FFFFFF;
        filter: drop-shadow(0px 1px 2px grey);
    }
`

export const NomeOpcaoDinheiro = styled.div`
    font-size: clamp(0.8vw,1.1vw, 2vw);
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;