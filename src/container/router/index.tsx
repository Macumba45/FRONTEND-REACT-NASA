import { FC, memo } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { getAuthenticatedToken } from "../../services/storage"
import Apod from "../../views/Apod"
import CreateApod from "../../views/CreateApod"
import Login from "../../views/Login"
import Profile from "../../views/Profile"
import Rover from "../../views/Rover"
import SignUp from "../../views/SignUp"
import Welcome from "../../views/Welcome"


const Router: FC = () => {


    const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {

        const token = getAuthenticatedToken();
        const location = useLocation();

        if (!token || token === null) {
            return <Navigate to="/" replace state={{ from: location }} />;
        }

        return children;
    };

    const PublicRoute = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (token) {
            if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/") {
                return <Navigate to="/welcome" replace state={{ from: location }} />;
            }
            return children;
        }

        return children;
    };


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signUp" element={<PublicRoute><SignUp /></PublicRoute>} />
                <Route path="/welcome" element={<ProtectedRoutes><Welcome /></ProtectedRoutes>} />
                <Route path="/apod" element={<ProtectedRoutes><Apod /></ProtectedRoutes>} />
                <Route path="/rover" element={<ProtectedRoutes><Rover /></ProtectedRoutes>} />
                <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
                <Route path="/createApod" element={<ProtectedRoutes><CreateApod /></ProtectedRoutes>} />

            </Routes>
        </BrowserRouter>

    )
}


export default memo(Router);
