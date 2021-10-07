import NavLink from "./NavLink";
import { css } from "@emotion/react";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useState } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";
/** @jsxImportSource @emotion/react */

const NavBar = ({ shadow }) => {

    const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        if (width < breakPoints.mobile) {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)    
        }  
    }  

    const style = css`
        width: 100%; 
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${spacing.wrapping};
        ${shadow && `box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 20px;`};
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

    const toggleThemeBtnContainer = css`
        margin-left: auto;
        padding-left: ${spacing.l};
    `

    const menuIconContainer = css`
        position: absolute;
        padding: ${spacing.wrapping};
        left: 0;

        & > * {
            font-size: ${font.icon.m};
            color: ${colors.font.primary};    
        }
    `

    const layer = css`
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 64px;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
    `

    const list = css`
        width: ${width > breakPoints.desktop ? spacing.contentWidth : "100%"};
        display: flex;
        justify-content: space-between;
        margin-left: auto;

        & > * + * {
            margin-left: ${spacing.l};
        }
    `
    const listMobile = css`
        position: absolute;
        top: 64px;
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
        <>
            {isMenuOpen && <div css={layer} onClick={toggleMobileMenu}></div>}
            <nav css={style}>
                {width < breakPoints.mobile && (
                    <div onClick={toggleMobileMenu} css={menuIconContainer}>
                        {isMenuOpen ? <GrClose /> : <AiOutlineMenu />}
                    </div>
                )}
                <ul css={width < breakPoints.mobile ? listMobile : list}>
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
                <div css={toggleThemeBtnContainer}>
                    <ToggleThemeBtn>change theme</ToggleThemeBtn>
                </div>
            </nav>
        </>
    );
}

export default NavBar;