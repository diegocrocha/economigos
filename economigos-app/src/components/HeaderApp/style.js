import styled from 'styled-components';

export const HeaderApp = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
`;

export const AlinhamentoLogo = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const AlinhamentoSearch = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AlinhamentoIcones = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderAppImage = styled.img`
    width: 190px;
    height: 100%;
    margin-top: 0.5%;
    margin-left: 5%;
`;

export const HeaderIconeConfig = styled.object`
    width: auto;
    height: 80%;
    margin-top: 0.5%;
    margin-right: 5%;
    margin-left: 1%;
    cursor: pointer;

    &:hover{
        filter: drop-shadow(0px 1px 2px grey)
    }

`;

export const HeaderIconePerfil = styled.object`
    width: auto;
    height: 80%;
    margin-top: 0.5%;
`;
