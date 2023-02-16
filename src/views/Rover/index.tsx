import { FC, useState } from "react";
import CardApod from "../../components/CardApod";
import NavBar from "../../components/NavBar";
import { MainRoverContainer, RoverButton, RoverContainer, RoverContainerData } from "./styles";
import { Props } from "./type";

const Rover: FC<Props> = () => {

    const [roverData, setRoverData] = useState<any[]>([]); // inicializar la variable apodData como array vacío


    const SyncApiRover = async () => {

        try {

            const token = localStorage.getItem('token'); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/sync-apiRovers', {

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

    const PrintRover = async () => {

        try {

            const token = localStorage.getItem('token'); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/rovers/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
            })
            const data = await response.json(); // obtener los datos de la respuesta
            console.log(data)
            setRoverData(data); // guardar los datos en la variable apodData

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <>
            <NavBar />
            <MainRoverContainer>
                <RoverContainer>
                    <RoverButton onClick={SyncApiRover}>Sync Rover</RoverButton>
                    <RoverButton onClick={PrintRover}>Print Rover From BBDD</RoverButton>
                </RoverContainer>
            </MainRoverContainer>
            <RoverContainerData>
                {/* {roverData.map((rover) => {
                    return (
                        <CardRover
                            key={rover.title}
                            title={rover.title}
                            explanation={rover.explanation}
                            date={rover.date}
                            url={rover.url}
                        />
                    )
                })} */}
            </RoverContainerData>
        </>

    )


}

export default Rover;
