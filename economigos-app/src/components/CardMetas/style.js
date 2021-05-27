import styled from 'styled-components';

export const Meta = styled.div`
    height: 49.5%;
    width: 275px;
    margin-top: 0%;
    border: 3px solid #E4E4E4;
    border-radius: 14px;
    padding: 1.5%;

    .nome{
        width: 100%;
        font-size: 1vw;
        border-bottom: 1.5px solid #32A287;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: #312F2F;
    }

    img{
        width: 100%;
        height: 30%;
        margin: 2% 0%;
    }

    .totalPercent{
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        font-weight: 600;
        color: #32A287;
    }

    .progresso{
        width: 100%;
        height: 23%;
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        border-bottom: 1.5px solid #32A287;

        .textBarra{
            width: 90%;
            height: 100%;
            font-size: x-small;
            font-weight: 700;

            .textProgress{
                width: 100%;
            }

            .barra{
                width: 100%;
                height: 35%;
                color: #32A287;
                border-radius: 7px;
            }

            .colorPrimary{
                color: #32A287;
            }
        }

        img{
            width: 10%;
            height: 67%;
        }
    }

    .alteracoes{
        width: 100%;
        height: 10%;
        margin-top: 2%;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;

        div{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: filter 0.2s ease;

            &:hover{
                cursor: pointer;
                filter: drop-shadow(0px 0.2px 0.5px grey);
            }

            img{
                margin: 0;
                height: 107%;
                width: 15%;
            }

            p{
                font-size: clamp(7px,11px,17px);
                font-weight: 800;
            }
        }
    }
`;
