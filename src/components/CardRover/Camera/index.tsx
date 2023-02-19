import { FC } from "react";
import { Props } from "./type";

const Camera: FC<Props> = ({ camera }) => {

    return (
        <div>
            <p>Name: {camera.name}</p>
            <p>Full name: {camera.full_name}</p>
        </div>
    )
}

export default Camera;