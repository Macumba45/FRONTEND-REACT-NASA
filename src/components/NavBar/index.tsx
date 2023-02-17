import { FC, useCallback } from "react";
import { Props } from "./type"
import { Nav, ProfileIco, ProfileLink, ButtonBack, RegisterIco, Container } from "./styles";
import { useLocation, useNavigate } from 'react-router-dom';
const LoginIcon = require("./assets/icono.png")
const LogoutIcon = require("./assets/icons8-logout-rounded-96.png")
const RegisterIcon = require("./assets/icons8-join-64.png")

const NavBar: FC<Props> = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const isLoginOrSignUp = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/";
    const showBackButton = !isLoginOrSignUp && location.pathname !== "/welcome";

    const profile = isLoginOrSignUp ? "Login" : "Profile";
    const logout = isLoginOrSignUp ? "Register" : "Logout";

    const profileImage = isLoginOrSignUp ? LoginIcon : LoginIcon;
    const logoutImage = isLoginOrSignUp ? RegisterIcon : LogoutIcon;

    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/login')
    }, [navigate])

    const handleBackButtonClick = useCallback(() => {
        window.history.back();
    }, []);

    return (
        <Container>
            <Nav>
                {showBackButton && (
                    <ButtonBack onClick={handleBackButtonClick}>Back</ButtonBack>
                )}
                <ProfileIco src={profileImage} />
                <ProfileLink>{profile}</ProfileLink>
                <RegisterIco src={logoutImage} />
                <ProfileLink onClick={handleLogout}>{logout}</ProfileLink>
            </Nav>
        </Container>
    );
};

export default NavBar;