import styled from "styled-components";
import IconeProximo from "../../assets/iconeProximo.svg";

export const Appi = styled.section`
    background-color: #e4e4e4;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow:hidden;
`

export const BtnFecharTela = styled.button`
    height: 35px;
    width: 35px;
    position: absolute;
    top: 8%;
    left: 81%;
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