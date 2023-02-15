import { FC, useCallback } from "react";
import { Props } from "./type"
import { Nav, ProfileIco, ProfileLink, ButtonBack, RegisterIco, Container } from "./styles";
import { useLocation, useNavigate } from 'react-router-dom';
const LoginIcon = require("./assets/icono.png")
const LogoutIcon = require("./assets/icons8-logout-rounded-96.png")
const RegisterIcon = require("./assets/icons8-join-64.png")

const NavBar: FC<Props> = ({ showBackButton, onBackButtonClick }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const profile = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/" ? "Login" : "Profile";
    const logout = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/" ? "Register" : "Logout";

    const profileImage = location.pathname === "/login" || location.pathname === "/signUp" ? LoginIcon : LoginIcon;
    const logoutImage = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/" ? RegisterIcon : LogoutIcon;

    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/')
    }, [navigate])

    return (

        <Container>
            <Nav>
                {showBackButton && (
                    <ButtonBack onClick={onBackButtonClick}>Back</ButtonBack>
                )}

                <ProfileIco src={profileImage} />
                <ProfileLink >{profile}</ProfileLink>
                <RegisterIco src={logoutImage} />
                <ProfileLink onClick={handleLogout}>{logout}</ProfileLink>
            </Nav>
        </Container>
    );
};

export default NavBar;