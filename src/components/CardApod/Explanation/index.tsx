import { FC } from "react";
import { ExplanationContainer, ExplanationText } from "./styles";
import { Props } from "./type";

const Explanation: FC<Props> = ({ explanation }) => {

    return (

        <ExplanationContainer>
            <ExplanationText>{explanation}</ExplanationText>
        </ExplanationContainer>

    )
}


export default Explanation;