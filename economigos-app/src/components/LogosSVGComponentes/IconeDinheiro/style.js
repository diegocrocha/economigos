import styled from 'styled-components';

export const IconeDinheiro = styled.svg`
    width: 25%;
    height: 100%;
    margin-left: 5%;
    cursor: pointer;
`;

export const CifraoInIconeDinheiro = styled.path`
    fill: ${props => props.fill}
`;