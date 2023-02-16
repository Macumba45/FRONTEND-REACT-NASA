import { FC } from "react";
import NavBar from "../../components/NavBar";
import { MainWelcomeContainer, WelcomeLink, WelcomeContainer } from "./styles";
import { Props } from "./type";

const Welcome: FC<Props> = () => {



    return (

        <>
            <NavBar />
            <MainWelcomeContainer>
                <WelcomeContainer>
                    <WelcomeLink to="/Apod">Go to Apods</WelcomeLink>
                    <WelcomeLink to="/Rover">Go to Rovers</WelcomeLink>
                </WelcomeContainer>
            </MainWelcomeContainer>
        </>

    )


}

export default Welcome;
