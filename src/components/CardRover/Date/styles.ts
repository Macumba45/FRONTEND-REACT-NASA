import styled from "styled-components";


export const DateContainer = styled.div`


height: 100px;
display: flex;
align-items: center;
color: white

`


export const DateText = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.small};
font-weight: ${({ theme }) => theme.fontWeights.bold};



`