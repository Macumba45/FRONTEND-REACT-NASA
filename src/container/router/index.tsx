import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Apod from "../../views/Apod"
import Login from "../../views/Login"
import Rover from "../../views/Rover"
import SignUp from "../../views/SignUp"
import Welcome from "../../views/Welcome"





const Router: FC = () => {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/apod" element={<Apod />} />
                <Route path="/rover" element={<Rover />} />
            </Routes>
        </BrowserRouter>

    )
}


export default Router