import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainApodContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;



`

export const ApodContainer = styled.div`

align-items: center;
background-color: ${({ theme }) => theme.colors.primary};
display: flex;
height:2rem;
justify-content: center;
margin-top: 3rem;
width: 100%;



`

export const ApodButton = styled.button`

    margin-right: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};


`