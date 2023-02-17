import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainWelcomeContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;



`

export const WelcomeContainer = styled.div`

align-items: center;
/* background-color: ${({ theme }) => theme.colors.primary}; */
display: flex;
height: 300px;
justify-content: center;
margin-top: 13rem;
width: 300px;
border-radius: 10px;


`

export const WelcomeLink = styled(Link)`

    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};;
    margin-right: 1rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 50px;
    border-radius: 10px;



`