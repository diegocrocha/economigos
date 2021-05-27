import styled from 'styled-components';

export const Search = styled.div`
    
    width: 100%;
    height: 60%;
    border-radius: 10px;
    background-color: white;
    display: flex;

`;

export const SearchInput = styled.div`
    
    width: 80%;
    height: 100%;
    background-color: none;

`;

export const Input = styled.input`
    
    height: 100%;
    display: block;
    font-size: 1rem;
    width: 95%;
    border: none;
    margin-left: 5%;
    color: #32A287;
    font-weight: 600;

`;



export const SearchImage = styled.div`
    
    width: 20%;
    height: 100%;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2%;

`;

export const ImgSearch = styled.img`
    
    width: 40%;
    height: 45%;
    &:hover{
        cursor: pointer;
        text-shadow: 0px 1px 2px grey;
    }
    
`;