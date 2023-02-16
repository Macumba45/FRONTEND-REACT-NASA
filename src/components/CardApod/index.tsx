import { FC } from "react";
import Explanation from "./Explanation";
import Title from "./Title";
import Date from "./Date";
import { Props } from "./type";
import Url from "./Url";
import { Content } from "./styles";

const CardApod: FC<Props> = ({ title, explanation, date, url }) => {

    return (

        <Content>
            <Title title={title}
            />
            <Explanation explanation={explanation}
            />
            <Url url={url}
            />
            <Date date={date}
            />
        </Content>


    )
}


export default CardApod;