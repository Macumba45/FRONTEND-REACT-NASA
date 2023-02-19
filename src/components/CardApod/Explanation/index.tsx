import { FC, memo } from "react";
import { ExplanationContainer, ExplanationText } from "./styles";
import { Props } from "./type";

const Explanation: FC<Props> = ({ explanation }) => {

    return (

        <ExplanationContainer>
            <ExplanationText>{explanation}</ExplanationText>
        </ExplanationContainer>

    )
}


export default memo(Explanation);
