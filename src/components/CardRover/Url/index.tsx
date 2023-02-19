import { FC } from "react";
import { GoToImg, UrlContainer, UrlImg } from "./styles";
import { Props } from "./type";

const Url: FC<Props> = ({ img_src }) => {

    return (

        <UrlContainer>
            <GoToImg target="_blank" to={img_src}><UrlImg src={img_src}></UrlImg></GoToImg>
        </UrlContainer>

    )
}


export default Url;