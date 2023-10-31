import styled from "styled-components";

export const Nav = styled.nav`

    background: #000;
    margin-top: 16px;
    padding: 16px;
    border-radius: 4px;

    a {
        color: #fff;
        display: inline-block;
        text-decoration: none;

        & + a {
            margin-left: 8px;
        }
    }
`;