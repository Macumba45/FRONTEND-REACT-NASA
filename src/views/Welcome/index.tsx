import { FC } from "react";
import NavBar from "../../components/NavBar";
import { MainSyncApodContainer, SyncApodButton, SyncApodContainer } from "./styles";
import { Props } from "./type";

const Welcome: FC<Props> = () => {



    return (

        <>
            <NavBar />
            <MainSyncApodContainer>
                <SyncApodContainer>
                    <SyncApodButton>Sync Apods</SyncApodButton>
                </SyncApodContainer>
            </MainSyncApodContainer>
        </>

    )


}

export default Welcome;
