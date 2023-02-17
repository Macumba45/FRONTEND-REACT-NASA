import styled from "styled-components";


export const Content = styled.div`
align-items: center;
display: flex;
flex-direction: column;
margin-top: 2rem;
margin: 10px;
height: 600px;
width: 300px;
border-radius: 20px;
background-color: ${({ theme }) => theme.colors.primary};


`

export const ContentButtons = styled.div`

display: flex;

`

export const DeteleApod = styled.button`

    background-color: white;
    background-size: cover;
    color: black;
    cursor: pointer;
    height: 30px;
    width: 5rem;
   border: none;
   border-radius: 10px;
   margin-bottom: 1rem;
   margin-right: 1rem;

`

