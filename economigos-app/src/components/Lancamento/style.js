import styled from 'styled-components';

export const Lancamento = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;

    img{
        margin-left: 7%;
        margin-right: 2%;
        margin-top: 4px;
        height: 70%;
        border-radius: 50%;
    }

    .infosLancamento{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;    
        width: 40%;

        p{
            color: #312F2F;
            opacity: 0.5;
            width: 100%;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.6rem;
        }

        p:nth-child(odd){
            color: #312F2F;
            opacity: 1;
            height: 16px;
            font-size: 0.8rem;
        }
    }

    .valorLancamento{
        width: 40%;
        height: 80%;
        justify-content: center;
        display: flex;
        align-items: center;
        font-weight: 600;
        color: ${props => props.receita ? "#32A287" : "#A23232"}
    }
`;
