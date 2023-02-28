import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    .logo {
        width: 2.5rem;
        height: 2.5rem;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    a {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme["gray-100"]};

        border-bottom: 3px solid transparent;
        border-top: 3px solid transparent;

        &:hover {
            border-bottom: 3px solid ${(props) => props.theme["green-500"]};
        }

        &.active {
            color: ${(props) => props.theme["green-500"]};
        }
    }
`