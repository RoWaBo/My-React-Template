import NavLink from "./NavLink";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const NavBar = ({ shadow }) => {

    const style = ({ colors, font, spacing }) => css`
        width: 100%;
        padding: ${spacing.m};
        ${shadow && `box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 20px;`}; 

        & ul {
            display: flex;
            justify-content: space-around; 

            & > * + * {
                margin-left: ${spacing.l};
            }
        }

        & li {
            font-size: ${font.size.l};
            font-weight: ${font.weight.regular};
            color: ${colors.font.primary};

            & > * {
                transition: color .2s ease-out;    
            }
            &:hover > * {
                color: ${colors.primary};
            }
        }

    `

    return (
        <nav css={style}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;