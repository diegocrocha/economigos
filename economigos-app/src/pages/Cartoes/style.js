import styled from "styled-components";

export const CartoesWrapper = styled.div`
    height: 100%;
    width: 100%;
`

export const InfoCartao = styled.div`
    margin-top: -5px;
    height: 19%;
    width: 100%;
    background-color: #E4E4E4;
    border: 3px solid #E4E4E4;
    border-bottom: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p{
      width: 100%;
      font-weight: 600;
    }

    div{
      width: 100%;
      font-weight: 700;
      font-size: 0.75rem;

      span{
        font-size: 1.45rem;
      }
    }
`

export const DetalhesCartao = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 4.3rem;
    border: 3px solid #E4E4E4;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;

    div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: small;
      font-weight: 600;

      p:nth-child(odd){
        color: #32A287;
      }
    }
`

export const UltimasAtividades = styled.div`
  height: 37%;
  margin-top: 1%;
  width: 100%;
  border: 3px solid #E4E4E4;
  border-radius: 14px;

  .conjuntoItensUltimasAtividades{
    height: 75%;
    width: 100%;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #C4C4C4;
      border-radius: 14px;        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #32A287;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid #32A287;  /* creates padding around scroll thumb */
    }
  }

  .titulo{
    color: #32A287;
    color: #32A287;
    width: 97%;
    margin-left: 3%;
    margin-bottom: 1%;
    font-weight: 600;
  }
`