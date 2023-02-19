import { FC, useCallback, useEffect, useState } from "react";
import Title from "./Title";
import Date from "./Date";
import { Props } from "./type";
import Url from "./Url";
import { Content, ContentButtons, DeteleApod, FavContainer, FavImg } from "./styles";
import { getAuthenticatedToken } from "../../services/storage";
import hearth from "./assets/icons8-favorite-96.png"
import hearthFilled from "./assets/icons8-favorite-96-filled.png"



const CardApod: FC<Props> = ({ id, title, date, url, onRemove }) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const deleteApod = useCallback(async (id: number) => {
        const token = getAuthenticatedToken();             // Obtener el token de localStorage
        await fetch(`http://localhost:8000/apods/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        });
        onRemove(id);
    }, [onRemove]);


    const addFavApod = useCallback(async (id: number) => {

        const token = getAuthenticatedToken();
        const response = await fetch(`http://localhost:8000/users/addFavoritesApod/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        });

        if (response.ok) {
            const data = await response.json();
            setIsFavorited(data.isAdded); // Aquí establecemos el estado a verdadero
        }

    }, [])


    const fetchData = async () => {
        const token = getAuthenticatedToken();
        const response = await fetch('http://localhost:8000/users/favList/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            const apodFavorite = data.apodFavorites.find((item: any) => item.id === id);
            setIsFavorited(apodFavorite !== undefined);
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (

        <Content>
            <Title title={title}
            />
            <Url url={url}
            />
            <Date date={date}
            />
            <ContentButtons>
                <DeteleApod type="button" onClick={() => { deleteApod(id) }}>Delete</DeteleApod>
                <FavContainer onClick={() => { addFavApod(id) }}>
                    <FavImg src={isFavorited ? hearthFilled : hearth} />
                </FavContainer>
            </ContentButtons>
        </Content>
    )
}


export default CardApod;