import styled from "styled-components";


export const ExplanationContainer = styled.div`

  margin: 0 30px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`


export const ExplanationText = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.smallest};
line-height: 1.5rem;
text-align: center;
height: 300px;


`