import styled from "styled-components";






export const Content = styled.div`
align-items: center;
display: flex;
flex-direction: column;
margin-top: 2rem;
margin: 10px;
height: 550px;
width: 300px;
border-radius: 20px;
background-color: ${({ theme }) => theme.colors.tertiary};


`


export const DeteleApod = styled.button`


  
    background-color: black;
    background-size: cover;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 5rem;
   border: none;
   border-radius: 10px;
   margin-bottom: 1rem;

`

