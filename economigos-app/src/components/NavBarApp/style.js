import styled from 'styled-components';

export const Nav = styled.nav`
    height: 90vh;
    width: 20%;
`;

let active;

export const BackItemNav = styled.div`
    background-color: ${props => props.className == "active-nav" ? "white" : "#e4e4e4"};
    text-align: center;
    height: 9vh;
    display: flex;
    align-items: center;

    &:nth-last-child(1) {
        margin-top: 40%;
    }

    a {
        ${props => props.className == "active-nav" ? active = true : active = false};
        display: flex;
        width: 100%;
        align-items: center;
    }
`

export const ItemNav = styled.li`
    width: 70%;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    list-style: none;
    background-color: ${props => props.className == "active" ?  "#32A287" : "white"};
    color: ${props => props.className == "active" ? "white" : "#32A287"};
    /* background-color: ${active ? "#32A287" : "white"}; */
    /* color: ${active ? "white" : "#32A287"}; */
    padding: 0.5rem;

    &:hover {
        background-color: #32A287;
        color: white;
    }
`
export const Ola = styled.h2`
    font-weight: 500;
    margin-bottom: 5vh;
    padding-left: 2rem;
    margin-top: 5vh;
`