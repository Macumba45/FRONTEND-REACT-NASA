import { FC, memo } from "react";
import { CameraContainer, CameraText } from "./styles";
import { Props } from "./type";

const Camera: FC<Props> = ({ camera }) => {

    return (
        <CameraContainer>
            <CameraText>{camera.name}</CameraText>
            <CameraText>{camera.full_name}</CameraText>
        </CameraContainer>
    )
}

export default memo(Camera);
