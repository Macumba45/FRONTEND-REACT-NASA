import { FC } from "react";
import { DateContainer, DateText } from "./styles";
import { Props } from "./type";

const Date: FC<Props> = ({ earth_date }) => {

    return (

        <DateContainer>
            <DateText>Date: {earth_date}</DateText>
        </DateContainer>
    )
}


export default Date;