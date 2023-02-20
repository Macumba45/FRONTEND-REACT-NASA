import styled from "styled-components";


export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`


export const FormApod = styled.form`
display: flex;
flex-direction: column;
height: 400px;
width: 300px;
margin-top: 10rem;
border: 2px solid black;
background-color:  ${({ theme }) => theme.colors.primary};
border-radius: 10px;


`

export const InputApod = styled.input`

margin-right: 1rem;
margin-left: 1rem;
font-family: ${({ theme }) => theme.fonts.primary};
color: ${({ theme }) => theme.colors.primary};
height: 3rem;
border: none;




`

export const LabelApod = styled.label`

margin-top: 2.6rem;
margin-right: 1rem;
margin-left: 1rem;
margin-bottom: 0.5rem;
font-family: ${({ theme }) => theme.fonts.primary};
color: ${({ theme }) => theme.colors.light};
font-weight: ${({ theme }) => theme.fontWeights.bold};



`

export const CreateApodButton = styled.button`
    text-align: center;
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    border:none;
    border-radius: 10px;
    margin-top: 1rem;
    cursor: pointer;
    padding: 0.5rem;

`
