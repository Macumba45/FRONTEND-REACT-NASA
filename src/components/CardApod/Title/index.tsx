import { FC } from "react";
import { TitleContainer, TitleH1 } from "./styles";
import { Props } from "./type";

const Title: FC<Props> = ({ title }) => {

    return (

        <TitleContainer>
            <TitleH1>{title}</TitleH1>
        </TitleContainer>

    )
}


export default Title;