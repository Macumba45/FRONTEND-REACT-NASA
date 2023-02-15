import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../../views/Login"
import SignUp from "../../views/SignUp"





const Router: FC = () => {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                {/* <Route path="/books" element={<Books />} />
                <Route path="/books/details/:listName" element={<BooksDetails />} /> */}
            </Routes>
        </BrowserRouter>

    )
}


export default Router