import styled from "styled-components";


export const CameraContainer = styled.div`

height: 100px;
display: flex;
flex-direction: column;
align-items: center;
color: white

`


export const CameraText = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
margin-top: 0.5rem;
font-size: ${({ theme }) => theme.fontSizes.small};
font-weight: ${({ theme }) => theme.fontWeights.bold};



`