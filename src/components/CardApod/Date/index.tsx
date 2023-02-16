import { FC } from "react";
import { DateContainer, DateText } from "./styles";
import { Props } from "./type";

const Date: FC<Props> = ({ date }) => {

    return (

        <DateContainer>
            <DateText>Date: {date}</DateText>
        </DateContainer>
    )
}


export default Date;