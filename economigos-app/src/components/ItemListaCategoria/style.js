import styled from "styled-components";

export const ItemListaCategoria = styled.li`
    width: 100%;
    height: 20%;
    margin: 5% 0%;
    display: flex;
    align-items: center;
    font-family: 'Poppins';

    div{
        width: 20px;
        height: 20px;
        border-radius: 4px;
        margin: 0% 5%;
        background-color: ${props => props.color}
    }

    span{
        font-weight: 600;
        color: ${props => props.color}
    }


`;