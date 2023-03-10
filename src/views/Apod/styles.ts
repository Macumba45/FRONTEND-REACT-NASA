import { Link } from "react-router-dom";
import styled from "styled-components";


export const BackgorundImg = styled.div`

background: rgb(11,61,145);
background: linear-gradient(180deg, rgba(11,61,145,1) 6%, rgba(252,61,33,1) 99%);
background-attachment: fixed;
background-position: center;
background-size: cover;
object-fit: cover;
  width:100%;
  height:100%;

`


export const MainApodContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;
margin-top: 6rem;

`

export const ApodButtonsLink = styled.div`

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

export const ApodButton = styled.button`

    margin-right: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: white;
    border:none;
    border-radius: 10px;
    padding: 0.6rem;
    margin-bottom: 1rem;
    cursor: pointer;

`

export const ApodContainer = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 1rem;
/* background-color: antiquewhite; */
margin-bottom: 5rem;


`
export const SyncApiApodContainer = styled.span`
  display: flex;
  justify-content: center;
  height: 3rem;
  align-items: center;
  background-color: white;
  margin-top: 2rem;
  
`


export const SyncApiApodText = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    color: green;
    font-weight: ${({ theme }) => theme.fontWeights.bold};

`

export const Footer = styled.footer`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 3rem;
  margin-top: 10rem;
  position: fixed;
  bottom: 0;

`


export const GoToCreateApod = styled(Link)`

  text-decoration: none;
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem;
  border-radius: 10px;




`




