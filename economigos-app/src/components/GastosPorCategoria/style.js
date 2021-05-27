import styled from "styled-components";


export const GastosPorCategoria = styled.div`
    width: 49.5%;
    height: 40%;
    border: 3px solid #e4e4e4e4;
    border-radius: 14px;
    font-family: 'Poppins';
    align-items: center;
    display: flex;
    flex-wrap:wrap;

    .tituloGasto{
        width: 100%;
        height: 20%;
        margin-top: 1%;
        display: flex;

        img{
            height: 100%;
            margin-left: 2%;
        }

        span{
            width: 100%;
            color: #A23232;
            font-weight: 700;
            font-size: 1.2rem;
            margin-left: -5%;
            margin-top: 1%;
        }
    }

    .listaDeCategorias{
        width: 50%;
        height: 80%;

        ul{
            list-style: none;
            height: 100%;
            width: 100%;
        }
    }

    .graficoDeCategorias{
        width: 50%;
        height: 80%;
    }

`
