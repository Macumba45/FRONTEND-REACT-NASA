import { FC, useCallback } from "react";
import NavBar from "../../components/NavBar";
import { MainApodContainer, ApodButton, ApodContainer } from "./styles";
import { Props } from "./type";

const Apod: FC<Props> = () => {

    const SyncApiApods = async () => {

        try {

            const token = localStorage.getItem('token'); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/sync-api/', {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
            })
            console.log(response)

        } catch (error) {
            console.log(error)

        }





    }


    return (

        <>
            <NavBar />
            <MainApodContainer>
                <ApodContainer>
                    <ApodButton onClick={SyncApiApods} >Sync Apod</ApodButton>
                </ApodContainer>
            </MainApodContainer>
        </>

    )


}

export default Apod;
