import { FC, memo } from "react";
import { Content } from "./styles";
import Date from "./Date";
import { Props } from "./type"
import Url from "./Url";
import Camera from "./Camera";

const CardRover: FC<Props> = ({ id, nasaId, img_src, earth_date, camera }) => {


    return (

        <Content>

            <Date earth_date={earth_date} />
            <Url img_src={img_src} />
            <Camera camera={{ name: camera.name, full_name: camera.full_name }} />

        </Content>



    )
}


export default memo(CardRover);

