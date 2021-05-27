import styled from 'styled-components';

export const ItemTab = styled.div`
    display: flex;
    height: 100%;
    min-width: 100px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: ${props => props.active ? "#32A287" : "transparent"} 5px solid;

    img{
        margin-top: 10%;
        height: 60%;
        width: 100%;
        margin-bottom: 3%;
    }

    svg{
        height: 76%;
        width: 100%;
    }

    p{
        font-weight: 600;
        font-size: 0.9rem;
    }

    &:hover{
        background-color: #e4e4e4;
        cursor: pointer
    }
`;
