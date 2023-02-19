import { FC } from "react";
import NavBar from "../../components/NavBar";
import { MainWelcomeContainer, WelcomeLink, WelcomeContainer, RoverPicture, RoverLink, ApodPicture, ApodLink } from "./styles";
import { Props } from "./type";

const Welcome: FC<Props> = () => {



    return (

        <>
            <NavBar />

            <MainWelcomeContainer>
                <WelcomeContainer>
                    <ApodPicture>
                        <ApodLink to="/Apod">Go to Apod</ApodLink>
                    </ApodPicture>
                    <RoverPicture>
                        <RoverLink to="/Rover">Go to Rovers</RoverLink>
                    </RoverPicture>

                </WelcomeContainer>
            </MainWelcomeContainer>
        </>

    )


}

export default Welcome;
