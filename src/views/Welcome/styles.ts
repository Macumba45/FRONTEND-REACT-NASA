import { Link } from "react-router-dom";
import styled from "styled-components";
import ApodImg from '../../../src/components/CardRover/assets/CenA_SofiaPlusB_2480.jpg'
import RoverImg from '../../../src/components/CardRover/assets/pia24487-r1-1041_41261791_20221215063231.jpg'


export const MainWelcomeContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;


`

export const WelcomeContainer = styled.div`

align-items: center;
/* background-color: ${({ theme }) => theme.colors.primary}; */
display: flex;
height: 600px;
justify-content: center;
margin-top: 5rem;
width: 600px;
border-radius: 10px;
flex-direction: column;


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

export const RoverPicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${RoverImg});
background-repeat: no-repeat;
background-size: cover;
height: 400px;
width: 400px;
border-radius: 20px;



`

export const RoverLink = styled(Link)`
  text-decoration: none;
    color: ${({ theme }) => theme.colors.light};;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.primary};
    border-radius: 10px;
    cursor: pointer;
   

   



`



export const ApodPicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${ApodImg});
background-repeat: no-repeat;
background-size: cover;
height: 400px;
width: 400px;
border-radius: 20px;
margin-bottom: 2rem;

`

export const ApodLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.primary};
    border-radius: 10px;
    cursor: pointer;
    align-items: center;




`