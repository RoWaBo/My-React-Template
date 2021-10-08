import NavLink from "./NavLink";
import { css } from "@emotion/react";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useState } from "react";
/** @jsxImportSource @emotion/react */

const NavBar = ({ shadow }) => {

    // HOOKS
    const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // FUNCTIONS
    const toggleMobileMenu = () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)

    // VARIABLES
    const navBarHeight = "64px"

    // === EMOTION STYLING ===
    const navStyle = css`
        width: 100%;
        height: ${navBarHeight};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${spacing.wrapping};
        overflow: hidden;

        ${shadow && `box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 20px;`};
        
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

    const menuIconContainerStyle = css`
        position: absolute;
        padding: ${spacing.wrapping};
        left: 0;

        & > * {
            font-size: ${font.icon.m};
            color: ${colors.font.primary};    
        }
    `
            
    const listStyle = css`
        width: ${width > breakPoints.desktop ? spacing.contentWidth : "100%"};
        display: flex;
        justify-content: space-between; 

        & > * + * {
            margin-left: ${spacing.l};
        }
    `
    const listMobileStyle = css`
        position: absolute;
        top: ${navBarHeight};
        left: ${isMenuOpen ? "0" : "-70vw"}; 
        padding: ${spacing.wrapping};
        background-color: ${colors.background.primary};
        width: 70vw;
        height: 100vh;
        transition: all .4s; 

        & > * + * {
            margin-top: ${spacing.l};
        }    
    `

    return (
        <nav css={navStyle}>
            {width < breakPoints.mobile && (
                <div onClick={toggleMobileMenu} css={menuIconContainerStyle}>
                    {isMenuOpen ? <GrClose /> : <AiOutlineMenu />}
                </div>
            )}
            <ul css={width < breakPoints.mobile ? listMobileStyle : listStyle}>
                <li onClick={toggleMobileMenu}>
                    <NavLink to="/">Home</NavLink>
                </li >
                <li onClick={toggleMobileMenu}>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={toggleMobileMenu}>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;