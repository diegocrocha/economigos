import styled from 'styled-components';

export const Botao = styled.div`
    height: 100%;
    width: 33%;
    background-color: ${props => props.active ? "#32A287" : "white"};
    color: ${props => props.active ? "white" : "#32A287"};
    font-size: ${props => props.active ? "initial" : "smaller"};
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    &:hover{
        background-color: #32A287;
        color: white;
        cursor: pointer;
    }
`;
