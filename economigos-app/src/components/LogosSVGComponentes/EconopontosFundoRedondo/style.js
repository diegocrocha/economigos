import styled from "styled-components";

export const EconopontosFundoRedondo = styled.svg`
    
    margin: 0% 2.5%;

    circle{
        fill: ${props => props.active ? "#32A287" : "white"}
    }

    path{
        fill: ${props => props.active ? "white" : "#32A287"}
    }

    &:hover{
        circle{
            fill: #32A287
        }

        path{
            fill: white
        }
    }
`;
