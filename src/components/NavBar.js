/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavLink from "./NavLink";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useState } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";
import Container from './Container';

const NavBar = ({ shadow }) => {

    // HOOKS
    const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    //  FUNCTIONS
    const toggleMobileMenu = () => {
        if (width < breakPoints.mobile) {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)    
        }  
    }
    
    // VARIABLES
    const navBarHeight = "64px"

    // === EMOTION STYLE ===
    const navBarStyle = css`
        width: 100%; 
        height: ${navBarHeight};
        display: flex;
        justify-content: center;
        align-items: center;
        
        overflow: hidden;

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

    const toggleThemeBtnContainerStyle = css`
        margin-left: auto;
        padding-left: ${spacing.l};
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

    const layerStyle = css`
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: ${navBarHeight};
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
    `

    const listStyle = css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;

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
        ${shadow && `box-shadow: inset rgba(149, 157, 165, 0.15) 0px 8px 20px;`}; 
        
        & > * + * {
            margin-top: ${spacing.l};
        }    
    `

    return (
        <Container maxWidth as="header">
            {isMenuOpen && <div css={layerStyle} onClick={toggleMobileMenu}></div>}
            <nav css={navBarStyle}>
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
                <div css={toggleThemeBtnContainerStyle}>
                    <ToggleThemeBtn>change theme</ToggleThemeBtn>
                </div>
            </nav>
        </Container>
    );
}

export default NavBar;