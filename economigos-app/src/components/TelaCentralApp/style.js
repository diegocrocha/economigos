import styled from "styled-components";

export const TelaCentralApp = styled.div`
    width: ${props => props.fechado ? "77.5%" : "60%"};
    height: 90vh;
    background-color: white;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    transition: ${props => props.fechado ? "all 1s 0.5s" : "all 1s"};
`

export const Pages = styled.div`
    align-content: flex-start;
    width: 573px;
    height: 73.5%;
    margin-left: 15%;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 573px){
        width: 70%;
    }
`
