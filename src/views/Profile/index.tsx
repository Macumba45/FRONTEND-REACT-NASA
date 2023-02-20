import { FC, memo, useCallback, useEffect, useState } from "react";
import Title from "../../components/CardApod/Title";
import Url from "../../components/CardApod/Url";
import Date from "../../components/CardApod/Date";
import NavBar from "../../components/NavBar";
import { getAuthenticatedToken } from "../../services/storage";
import { ApodFavContainer, ContainerProfile, Content, EmailContainer, FavH1, IdContainer, MainContainerProfile } from "./styles";
import { Props } from "./type";


const Profile: FC = () => {

    const [userData, setUserData] = useState<{ id: string, email: string, name: string } | null>(null);
    const [apodFavs, setApodFavs] = useState<Props[]>([]);


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
        console.log(data);
        setUserData(data)

    }, []);

    const getApodFav = useCallback(async () => {

        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch('http://localhost:8000/users/favList/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await response.json();
        const apodFavs = data.apodFavorites;
        return apodFavs


    }, [])

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();
            const apodFavs = await getApodFav();
            setApodFavs(apodFavs);
        };
        fetchData();
    }, [userInfo, getApodFav]);

    return (

        <>
            <NavBar />
            <MainContainerProfile>
                <ContainerProfile>
                    <IdContainer>ID: {userData?.id}</IdContainer>
                    <EmailContainer>Email: {userData?.email}</EmailContainer>
                    {userData?.name ? `Name: ${userData.name}` : null}
                </ContainerProfile>
                <FavH1>Favorite list &#128154;</FavH1>
                <ApodFavContainer>
                    {apodFavs.map((fav) => (
                        <Content
                            key={fav.title}>
                            <Title title={fav.title}
                            />
                            <Url url={fav.url}
                            />
                            <Date date={fav.date}
                            />
                        </Content>

                    ))}
                </ApodFavContainer>

            </MainContainerProfile>

        </>

    )
}


export default memo(Profile);
