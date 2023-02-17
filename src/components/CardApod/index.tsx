import { FC, useCallback } from "react";
import Title from "./Title";
import Date from "./Date";
import { Props } from "./type";
import Url from "./Url";
import { Content, ContentButtons, DeteleApod } from "./styles";
import { getAuthenticatedToken } from "../../services/storage";


const CardApod: FC<Props> = ({ id, title, date, url, onRemove }) => {


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
                <DeteleApod type="button" onClick={() => { }}>Add to Fav</DeteleApod>
            </ContentButtons>
        </Content>


    )
}


export default CardApod;