import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIgnite } from "../../assets/images/logo.svg";
import { HeaderContainer, NavContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <LogoIgnite className="logo" />
            <NavContainer>
                <NavLink to="/" title="timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="histórico">
                    <Scroll size={24} />
                </NavLink>
            </NavContainer>
        </HeaderContainer>
    )
}