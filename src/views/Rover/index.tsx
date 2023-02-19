import { FC, useEffect, useState } from "react";
import CardRover from "../../components/CardRover";
import NavBar from "../../components/NavBar";
import { getAuthenticatedToken } from "../../services/storage";
import { MainRoverContainer, RoverButton, RoverContainer, RoverContainerData, SyncApiRoverContainer, SyncApiRoverText } from "./styles";

const Rover: FC = () => {

    const [roverData, setRoverData] = useState<any[]>([]); // inicializar la variable apodData como array vacío
    const [isLoading, setIsLoading] = useState(false);



    const SyncApiRover = async () => {


        setIsLoading(true);


        try {

            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/sync-apiRovers', {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
            })
            console.log(response)
            PrintRover()

        } catch (error) {
            console.log(error)

        }
        setIsLoading(false);

    }

    const PrintRover = async () => {

        try {

            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/rovers/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
            })

            const data = await response.json();
            console.log(data)
            setRoverData(data)
            return data;

        } catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {
        const printApodsAsync = async () => {
            const data = await PrintRover();
            setRoverData(data);
        };
        printApodsAsync();
    }, [setRoverData]);

    return (

        <>
            <NavBar />
            <MainRoverContainer>
                <RoverContainer>
                    <RoverButton onClick={SyncApiRover}>Sync Rover</RoverButton>
                    {/* <RoverButton onClick={PrintRover}>Print Rover From BBDD</RoverButton> */}
                </RoverContainer>
            </MainRoverContainer>
            <SyncApiRoverContainer>
                {isLoading && <SyncApiRoverText>Synchronizing...</SyncApiRoverText>}
            </SyncApiRoverContainer>
            <RoverContainerData>
                {roverData.map((rover) => {
                    return (
                        <CardRover
                            key={rover.id}
                            id={rover.id}
                            nasaId={rover.nasaId}
                            earth_date={rover.earth_date}
                            img_src={rover.img_src}
                            camera={rover.camera.name} />
                    )
                })}
            </RoverContainerData>
        </>

    )


}

export default Rover;
