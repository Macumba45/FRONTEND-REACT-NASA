import { FC, useCallback, useEffect, useState } from "react";
import { Content } from "./styles";
import Date from "./Date";
import { Props } from "./type"
import Url from "./Url";




const CardRover: FC<Props> = ({ id, nasaId, img_src, earth_date, camera }) => {

    return (

        <Content>

            <Date earth_date={earth_date} />
            <Url img_src={img_src} />


        </Content>



    )
}


export default CardRover;