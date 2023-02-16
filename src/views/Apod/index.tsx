import { FC, useCallback, useState } from "react";
import CardApod from "../../components/CardApod";
import NavBar from "../../components/NavBar";
import { MainApodContainer, ApodButton, ApodButtonsLink, ApodContainer } from "./styles";
import { Props } from "./type";

const Apod: FC = () => {

    const [apodData, setApodData] = useState<any[]>([]); // inicializar la variable apodData como array vacío


    const SyncApiApods = async () => {

        try {

            const token = localStorage.getItem('token'); // Obtener el token de localStorage
            await fetch('http://localhost:8000/sync-api/', {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
            })

        } catch (error) {
            console.log(error)

        }

    }

    const PrintApods = async () => {

        try {

            const token = localStorage.getItem('token'); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/apods/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
            })
            const data = await response.json(); // obtener los datos de la respuesta
            setApodData(data); // guardar los datos en la variable apodData

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <>
            <NavBar />
            <MainApodContainer>
                <ApodButtonsLink>
                    <ApodButton onClick={SyncApiApods} >Sync Apod</ApodButton>
                    <ApodButton onClick={PrintApods} >Print Apod From BBDD</ApodButton>
                </ApodButtonsLink>
            </MainApodContainer>
            <ApodContainer>
                {apodData.map((apod) => {
                    return (
                        <CardApod
                            key={apod.title}
                            title={apod.title}
                            explanation={apod.explanation}
                            date={apod.date}
                            url={apod.url}
                        />
                    )
                })}

            </ApodContainer>

        </>

    )


}

export default Apod;
