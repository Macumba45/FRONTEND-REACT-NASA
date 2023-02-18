import { FC, useCallback, useEffect, useState } from "react";
import { string } from "yup";
import NavBar from "../../components/NavBar";
import { getAuthenticatedToken } from "../../services/storage";
import { ContainerProfile, EmailContainer, IdContainer, MainContainerProfile, NameContainer } from "./styles";

const Profile: FC = () => {

    const [userData, setUserData] = useState<{ id: string, email: string, name: string } | null>(null);

    const userInfo = useCallback(async () => {

        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch('http://localhost:8000/users/profile', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        })
        const data = await response.json();
        setUserData(data)

    }, [])

    useEffect(() => {

        userInfo()

    }, [userInfo])


    return (

        <>
            <NavBar />
            <MainContainerProfile>
                <ContainerProfile>
                    <>
                        <IdContainer>ID: {userData?.id}</IdContainer>
                        <EmailContainer>Email: {userData?.email}</EmailContainer>
                        {userData?.name ? `Name: ${userData.name}` : null}
                    </>
                </ContainerProfile>
            </MainContainerProfile>
        </>

    )
}


export default Profile;