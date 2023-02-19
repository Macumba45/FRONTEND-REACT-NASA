import styled from "styled-components";


export const MainContainerProfile = styled.div`

display: flex;
align-items: center;
background-color:white;
height: 100vh;
width: 100vw;
flex-direction: column;
margin-top: 5rem;   


`

export const ContainerProfile = styled.div`
    display: flex;
    justify-content: center;;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color:${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    

`

export const IdContainer = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
font-weight: ${({ theme }) => theme.fontWeights.bold};
margin-top: 2rem;
color: ${({ theme }) => theme.colors.light};


`

export const EmailContainer = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
font-weight: ${({ theme }) => theme.fontWeights.bold};
margin-bottom: 1rem;
margin-top: 2rem;
color: ${({ theme }) => theme.colors.light};


`

export const NameContainer = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
font-weight: ${({ theme }) => theme.fontWeights.semiBold};
margin-bottom: 1rem;
margin-top: 1rem;


`

export const ApodFavContainer = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 5rem;

`


export const Content = styled.div`
align-items: center;
color: ${({ theme }) => theme.colors.light};
display: flex;
flex-direction: column;
margin-top: 2rem;
margin: 10px;
height: 500px;
width: 300px;
border-radius: 20px;
background-color: ${({ theme }) => theme.colors.primary};


`


