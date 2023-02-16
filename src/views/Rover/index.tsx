import { FC } from "react";
import NavBar from "../../components/NavBar";
import { MainRoverContainer, RoverButton, RoverContainer } from "./styles";
import { Props } from "./type";

const Rover: FC<Props> = () => {

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

    return (

        <>
            <NavBar />
            <MainRoverContainer>
                <RoverContainer>
                    <RoverButton onClick={SyncApiRover}>Sync Rover</RoverButton>
                </RoverContainer>
            </MainRoverContainer>
        </>

    )


}

export default Rover;
