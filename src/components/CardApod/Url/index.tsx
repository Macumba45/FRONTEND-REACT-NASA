import { FC, memo } from "react";
import { GoToImg, UrlContainer, UrlImg } from "./styles";
import { Props } from "./type";

const Url: FC<Props> = ({ url }) => {

    return (

        <UrlContainer>
            <GoToImg target="_blank" to={url}><UrlImg src={url}></UrlImg></GoToImg>
        </UrlContainer>

    )
}


export default memo(Url);
