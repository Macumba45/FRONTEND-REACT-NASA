import { FC, useContext, useEffect, useState } from "react";
import Explanation from "./Explanation";
import Title from "./Title";
import Date from "./Date";
import { Props } from "./type";
import Url from "./Url";
import { Content, ContentButtons, DeteleApod } from "./styles";
import { getAuthenticatedToken } from "../../services/storage";
import Apod from "../../views/Apod";

const CardApod: FC<Props> = ({ id, title, date, url, onRemove }) => {


    const printApods = async () => {

        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        await fetch('http://localhost:8000/apods/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        })

    }

    const deleteApod = async (id: number) => {


        const token = getAuthenticatedToken();             // Obtener el token de localStorage
        await fetch(`http://localhost:8000/apods/${id}`, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        });

        onRemove(id);

    }


    return (

        <Content>
            <Title title={title}
            />
            <Url url={url}
            />
            <Date date={date}
            />
            <ContentButtons>
                <DeteleApod type="button" onClick={() => { deleteApod(id); printApods() }}>Delete</DeteleApod>
                <DeteleApod type="button" onClick={() => { }}>Add to Fav</DeteleApod>
            </ContentButtons>
        </Content>


    )
}


export default CardApod;