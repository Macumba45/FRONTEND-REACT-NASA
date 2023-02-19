import { FC } from "react";
import { Props } from "./type";

const Camera: FC<Props> = ({ camera }) => {

    return (
        <div>
            <p>Nombre: {camera.name}</p>
            <p>Nombre completo: {camera.full_name}</p>
        </div>
    )
}

export default Camera;