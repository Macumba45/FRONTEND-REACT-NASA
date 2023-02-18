import styled from "styled-components";


export const MainContainerProfile = styled.div`

display: flex;
justify-content: center;
background-color:${({ theme }) => theme.colors.primary};
height: 100vh;
width: 100vw;

`

export const ContainerProfile = styled.div`
    display: flex;
    justify-content: center;;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    margin-top: 4rem;   

`

export const IdContainer = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
font-weight: ${({ theme }) => theme.fontWeights.bold};
margin-bottom: 1rem;

`

export const EmailContainer = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
font-weight: ${({ theme }) => theme.fontWeights.bold};
margin-bottom: 1rem;
margin-top: 1rem;

`

export const NameContainer = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
font-weight: ${({ theme }) => theme.fontWeights.semiBold};
margin-bottom: 1rem;
margin-top: 1rem;


`


