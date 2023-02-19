import styled from "styled-components";


export const MainRoverContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;
margin-top: 3rem;

`

export const RoverContainer = styled.div`

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

export const RoverButton = styled.button`

    margin-right: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};


`

export const RoverContainerData = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 1rem;

`

export const SyncApiRoverContainer = styled.span`
  display: flex;
  justify-content: center;
  height: 3rem;
  align-items: center;
  background-color: white;
  margin-top: 5rem;
  
`


export const SyncApiRoverText = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    color: green;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    

`