import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainApodContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;
margin-top: 8rem;



`

export const ApodButtonsLink = styled.div`

align-items: center;
background-color: ${({ theme }) => theme.colors.primary};
display: flex;
height:4rem;
justify-content: center;
margin-top: 3rem;
width: 100%;
top: 0;
position: fixed;



`

export const ApodButton = styled.button`

    margin-right: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};


`


export const ApodContainer = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 1rem;

`